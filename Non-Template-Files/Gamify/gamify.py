def initialize():
    '''Initializes the global variables needed for the simulation.
    Note: this function is incomplete, and you may want to modify it'''

    global cur_hedons, cur_health, last_star_time, last_star_time2, last_star_time3, \
           cur_time, last_activity, last_activity_duration, last_running_time, \
           last_textbooks_time, last_resting_time, last_running_duration, \
           cur_star_activity, last_finished, bored_with_stars, stars

    cur_hedons = 0
    cur_health = 0
    stars = 0
    last_star_time = -1000
    last_star_time2 = -1000
    last_star_time3 = -1000
    cur_star_activity = None
    stars = 0
    bored_with_stars = False

    last_activity = None
    last_activity_duration = 0
    last_running_duration = 0

    cur_time = 0

    last_running_time = -5000
    last_textbooks_time = -1000
    last_resting_time = -1000

    last_finished = -1000

def star_can_be_taken(activity):
    if bored_with_stars == False and (activity == "running" or activity == "resting" \
       or activity == "textbooks") and cur_star_activity == activity and \
       last_star_time - cur_time == 0:
        return True
    else:
        return False

def offer_star(activity):
    global bored_with_stars, last_star_time, last_star_time2, last_star_time3, \
           cur_time, stars, cur_star_activity
    last_star_time, last_star_time2, last_star_time3 = cur_time, last_star_time, \
                                                       last_star_time2
    stars += 1
    if cur_time - last_star_time3 <= 120 and stars >= 3:
        bored_with_stars = True
    elif cur_time - last_star_time3 > 120 and stars > 3:
        stars = 0
        stars += 1
    cur_star_activity = activity

def perform_activity(activity, duration):
    global cur_hedons, cur_health, cur_time, last_activity, last_activity_duration, \
           last_finished, last_running_time, last_textbooks_time, cur_star_activity, \
           last_star_time, last_resting_time, last_running_duration
    if cur_star_activity == activity:
        if star_can_be_taken(activity) and cur_time - last_star_time == 0:
            cur_hedons += min(10, duration) * 3
    if activity == "running":
        if last_activity == "running":
            if last_resting_time - last_running_time > 0:
                cur_health += min(180, duration) * 3
                if duration > 180:
                    cur_health += (duration - 180) * 1
            else:
                if last_running_duration < 180:
                    effective_duration = min(duration, 180 - last_running_duration)
                    cur_health += effective_duration * 3
                    if effective_duration < duration:
                        cur_health += (duration - effective_duration) * 1
                else:
                    cur_health += duration * 1
        else:
            cur_health += min(180, duration) * 3
            if duration > 180:
                cur_health += (duration - 180) * 1
        if cur_time - last_running_time < 120 or cur_time - last_textbooks_time < 120:
                cur_hedons += duration * -2
        else:
            cur_hedons += (min(10, duration)) * 2
            if duration > 10:
                cur_hedons += (duration - 10) * -2
        cur_time += duration
        if last_activity == "running":
            last_running_duration += duration
        else:
            last_running_duration = duration
        last_running_time = cur_time
        last_activity = activity
        last_activity_duration = duration
        last_finished = cur_time
    if activity == "textbooks":
        cur_health += duration * 2
        if cur_time - last_running_time < 120 or cur_time - last_textbooks_time < 120:
            cur_hedons += duration * -2
        else:
            cur_hedons += min(20, duration) * 1
            if duration > 20:
                cur_hedons += (duration - 20) * -1
        cur_time += duration
        last_textbooks_time = cur_time
        last_activity = activity
        last_activity_duration = duration
        last_finished = cur_time
    elif activity == "resting":
        cur_hedons += duration * 0
        cur_time += duration
        last_resting_time = cur_time
        last_activity = activity
        last_activity_duration = duration
        last_finished = cur_time
    else:
        return None


def get_cur_hedons():
    global cur_hedons
    return cur_hedons

def get_cur_health():
    global cur_health
    return cur_health

def most_fun_activity_minute():
    global cur_hedons, cur_health, last_star_time, last_star_time2, last_star_time3, \
           cur_time, last_activity, last_activity_duration, last_running_time, \
           last_textbooks_time, last_resting_time, last_running_duration, \
           cur_star_activity, last_finished, bored_with_stars, stars
    activities = ["running", "textbooks", "resting"]
    most_hedons_per_min = -5000
    hedons_per_min = 0
    for activity in activities:
        temp_cur_hedons = cur_hedons
        temp_cur_health = cur_health
        temp_last_star_time = last_star_time
        temp_last_star_time2 = last_star_time2
        temp_last_star_time3 = last_star_time3
        temp_cur_time = cur_time
        temp_last_activity = last_activity
        temp_last_activity_duration = last_activity_duration
        temp_last_running_time = last_running_time
        temp_last_textbooks_time = last_textbooks_time
        temp_last_resting_time = last_resting_time
        temp_last_running_duration = last_running_duration
        temp_cur_star_activity = cur_star_activity
        temp_last_finished = last_finished
        temp_bored_with_stars = bored_with_stars
        temp_stars = stars
        perform_activity(activity, 1)
        hedons_per_min = (cur_hedons - temp_cur_hedons) / 1
        if hedons_per_min > most_hedons_per_min:
            most_hedons_per_min = hedons_per_min
            most_fun_activity = activity
        cur_hedons = temp_cur_hedons
        cur_health = temp_cur_health
        last_star_time = temp_last_star_time
        last_star_time2 = temp_last_star_time2
        last_star_time3 = temp_last_star_time3
        cur_time = temp_cur_time
        last_activity = temp_last_activity
        last_activity_duration = temp_last_activity_duration
        last_running_time = temp_last_running_time
        last_textbooks_time = temp_last_textbooks_time
        last_resting_time = temp_last_resting_time
        last_running_duration = temp_last_running_duration
        cur_star_activity = temp_cur_star_activity
        last_finished = temp_last_finished
        bored_with_stars = temp_bored_with_stars
        stars = temp_stars
    return most_fun_activity


################################################################################
# These functions are not required, but we recommend that you use them anyway
# as helper functions

def get_effective_minutes_left_hedons(activity):
    '''Return the number of minutes during which the user will get the full
    amount of hedons for activity activity'''
    pass

def get_effective_minutes_left_health(activity):
    pass

def estimate_hedons_delta(activity, duration):
    '''Return the amount of hedons the user would get for performing activity
    activity for duration minutes'''
    pass

def estimate_health_delta(activity, duration):
    pass

################################################################################

if __name__ == '__main__':
    initialize()
    perform_activity("running", 30)
    print(get_cur_hedons())            # -20 = 10 * 2 + 20 * (-2)             # Test 1
    print(get_cur_health())            # 90 = 30 * 3                          # Test 2
    print(most_fun_activity_minute())  # resting                              # Test 3
    perform_activity("resting", 30)
    offer_star("running")
    print(most_fun_activity_minute())  # running                              # Test 4
    perform_activity("textbooks", 30)
    print(get_cur_health())            # 150 = 90 + 30*2                      # Test 5
    print(get_cur_hedons())            # -80 = -20 + 30 * (-2)                # Test 6
    offer_star("running")
    perform_activity("running", 20)
    print(get_cur_health())            # 210 = 150 + 20 * 3                   # Test 7
    print(get_cur_hedons())            # -90 = -80 + 10 * (3-2) + 10 * (-2)   # Test 8
    perform_activity("running", 170)
    print(get_cur_health())            # 700 = 210 + 160 * 3 + 10 * 1         # Test 9
    print(get_cur_hedons())            # -430 = -90 + 170 * (-2)              # Test 10

# NON INCLUDED TEST CASES (attempting to fix issues with cur_health)
# if __name__ == '__main__':
    initialize()

    perform_activity("running", 30)
    print(get_cur_health())  # Expected: 90

    perform_activity("running", 200)
    print(get_cur_health())  # Expected: 590

    perform_activity("resting", 120)
    perform_activity("running", 60)
    print(get_cur_health())  # Expected: 770

    perform_activity("resting", 120)
    perform_activity("running", 240)
    print(get_cur_health())  # Expected: 1370

    perform_activity("textbooks", 90)
    perform_activity("running", 60)
    print(get_cur_health())  # Expected: 1730

    perform_activity("textbooks", 90)
    perform_activity("running", 240)
    print(get_cur_health())  # Expected: 2510

    perform_activity("resting", 90)
    perform_activity("running", 60)
    print(get_cur_health())  # Expected: 2690

    perform_activity("textbooks", 90)
    perform_activity("resting", 30)
    perform_activity("running", 240)
    print(get_cur_health())  # Expected: 3470

    perform_activity("resting", 120)
    perform_activity("running", 1000)
    print(get_cur_health())  # Expected: 4830

    perform_activity("running", 1000)
    print(get_cur_health())  # Expected: 5830
    perform_activity('resting', 1)
    perform_activity('running', 100)
    perform_activity('running', 100)
    perform_activity('running', 200)
    print(get_cur_health())


    # 346 test cases in external files

