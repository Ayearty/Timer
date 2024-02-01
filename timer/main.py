import time

def clock(x):
    while x:
        min, secs = divmod(x, 60)
        timer = '{:02d}:{:02d}'.format(min,secs)
        print (timer, end='/r')
        time.sleep(1)
        x -= 1
    print ('Timer completed!')

x = input('Enter the countdown time in seconds: ')

clock(int(x))