# Feature Index: Virtual Sports Museum

| feature_id | feature_name | brief | player_value | priority | depends_on | distribution | status | spec_doc |
|---|---|---|---|---|---|---|---|---|
| web_player | Web Browser Launcher | Точка входа: запуск музея в браузере без плагинов | Немедленный доступ без установки | MVP | — | all | planned | TBD |
| hall_environment | 3D Exhibition Hall | Виртуальный зал с пространственной компоновкой экспонатов | Атмосфера реального музея | MVP | web_player | all | completed | 2026-06-07_hall_environment_gd-spec.md |
| free_explore | Free Exploration Mode | Свободное перемещение по залу в режиме first-person / orbit | Самостоятельное открытие экспонатов | MVP | hall_environment | all | ready_for_test | 2026-06-07_free_explore_gd-spec.md |
| object_interaction | 3D Object Interaction | Детекция приближения/наведения на артефакт с всплывающей info-панелью | Детальный контекст и история каждого объекта | MVP | hall_environment | all | ready_for_merge | TBD |
| poster_display | 2D Poster Display | Размещение 30–40 плакатов на стенах зала | Визуальная историческая справка | MVP | hall_environment | all | ready_for_test | 2026-06-07_poster_display_gd-spec.md |
| info_panel | Info Panel UI | Всплывающая панель с текстом/изображением при взаимодействии с объектом | Доступная информация без отрыва от пространства | MVP | object_interaction | all | pending | TBD |
| audio_guide | Audio Guide System | Озвучка фиксированного маршрута с тематическими ветками от одного диктора | Личный экскурсовод, глубина контекста | MVP | hall_environment | all | pending | TBD |

## Dependency map
- web_player → hall_environment → [free_explore, poster_display, audio_guide]
- hall_environment → object_interaction
- audio_guide → tour_selection + audio_playback
