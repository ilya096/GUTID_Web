# План: Object Interaction Feature

## Технические детали
- @react-three/fiber для 3D сцены
- Raycasting для обнаружения приближения к объектам
- InfoPanel компонент (MUI Dialog)

## Задачи

### 1. InteractionSystem для расчёта расстояния
- Raycaster траектория от камеры к курсору
- Порог активации: 1.5м (из spec)
- Trigger: onPointerMove

### 2. InfoPanel UI компонент
- MUI Dialog с изображением/текстом
- Позиция: рядом с объектом
- Данные: из конфигурации объекта

### 3. Интеграция с HallEnvironment
- Добавить InteractionSystem в сцену
- Подключить InfoPanel к Zustand store

### 4. Тестирование
- Проверка срабатывания при приближении
- FPS не падает ниже 30
