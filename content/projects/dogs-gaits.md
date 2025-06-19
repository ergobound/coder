---
title: "Dog gaits bot"
date: 2025-06-19
draft: false
description: ""
image: /images/projects/gaits-screen.jpg
imageenable: false
video: /video/dog-gaits.mov

# featuredLink:
#     enable: true
#     name: "Репозиторий проекта"
#     target: "_blank"
#     url: "https://github.com/ergobound/Analysis-Dog-Bot"
---

Приватный телеграм бот на базе мультимодальной VLM (Visual Language Model) VideoLLaMA3, которая способна распознавать видео и изображения.  
Бот принимает видео походки собаки, анализирует его на наличие заболеваний опорно-двигательной системы четвероногого и после чего выдает результат.

Примечания:
 - Требует больших ресурсов вычислительной мощности (минимум 40Gb GPU)  
 - Работает через кластерный супер-компьютер (но можно легко подключить к обычному серверу)
 - Произведена тонкая настройка через LoRA на небольшом тестовом датасете  

В проекте используются:
 - transformers
 - VideoLLaMA3
 - LoRA (Low Rank Adaptation)
 - python-telegram-bot