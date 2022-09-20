# print('Hello World')
# ../yolov5/detect.py
import os
import glob
import subprocess
import shutil

path = ''
weights_fdr = '../yolov5/best_1280_epoch_50.pt'
video_fdr = '../game_2.mp4'
# python detect.py --weights 1280_epoch_50.pt --img 1280 --conf 0.6 --source 

try:
    with open('dataa2.txt' , 'r') as f:
        path = f.readline()
except:
    print('File Doesnt Exist')

subprocess.run(f"python ../yolov5/detect.py --weights {weights_fdr} --img {1280} --conf {0.6} --source {path}")

# runs/detect/expNO
os.chdir('C:/Users/zchxv/Desktop/Extra/Table Tennis Score Keeping/project/yolov5')
print(os.getcwd())
dir_name = os.path.join('runs' , 'detect')

x = [value for index , value in enumerate(glob.glob(f'{dir_name}/*')) if index == len(os.listdir(dir_name)) -1]
x.append([i for i in os.listdir(x[0])])
x = os.path.join(x[0] , x[1][0])
print(f'Print : {x}')

os.chdir('C:/Users/zchxv/Desktop/Extra/Table Tennis Score Keeping/project/yolov5')
name = x.split('\\')[-1]
# print(f'name : {name}')

src = x
dest = 'C:/Users/zchxv/Desktop/Extra/Table Tennis Score Keeping/project/gamee_2.mp4'
shutil.copyfile(src , dest)
print('copied')

# os.mkdir('data.txt')
os.chdir('../server')
with open('dataa.txt' , 'w') as f:
    f.write(name)
    