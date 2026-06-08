# Руководство по работе с Kilo: Agent Manager, Worktrees, Git, NPM и оркестрация

## 1. Agent Manager и агенты Kilo

### Что такое Agent Manager
Agent Manager — это расширение VS Code для распараллеливания задач между несколькими агентами. Каждый агент работает в изолированном worktree или каталоге.

### Как использовать агентов

**Создание задачи через Agent Manager:**
- Откройте панель Kilo в VS Code
- Нажмите "New Agent" или используйте `/agent_manager`
- Укажите:
  - **prompt**: задачу для агента
  - **name**: краткое название (отображается на карточке)
  - **branchName**: имя ветки (для worktree mode)

**Типы агентов:**
- `explore` — быстрый поиск по кодовой базе
- `general` — универсальный агент для многошаговых задач

**Пример создания агента:**
```
/agent_manager mode=worktree tasks=[{prompt: "Напиши тесты для playerStore", name: "player-store-tests", branchName: "test-player-store"}]
```

## 2. Worktrees (Изолированные ветки)

### Что такают worktrees
Git worktree позволяет создать несколько рабочих каталогов для одного репозитория, каждый из которых находится в своей ветке.

### Как работает worktree в Kilo

**Создание worktree:**
- При `mode=worktree` Agent Manager создаст worktree в `.kilo/worktrees/<branch-name>/`
- Worktree автоматически связывается с веткой

**Структура:**
```
.kilo/worktrees/
├── grape-duckling/     # Текущий worktree
├── feature-abc/        # Другой worktree
└── bugfix-xyz/         # Ещё один
```

**Полезные команды:**
```bash
# Список worktrees
git worktree list

# Удаление worktree (после завершения)
git worktree remove .kilo/worktrees/old-branch
```

## 3. Работа с ветками и коммитами в VS Code

### Базововый workflow

**Создание новой фичи:**
1. Убедитесь, что state.json обновлён (`.kilo/state.json`)
2. Создайте ветку: `git checkout -b <feature-name>`
3. Работайте над фичей
4. Тестируйте: `npm run test`
5. Коммитьте: `git add . && git commit -m "feat: <описание>"`

**Важные команды:**
```bash
# Статус изменений
git status

# Показать изменения
git diff

# Закоммитить
git commit -m "описание"

# Отменить изменения файла
git checkout -- <file>
```

### .gitignore
Убедитесь, что в `.gitignore` есть:
```
node_modules/
dist/
.env
*.log
```

## 4. NPM Scripts и PowerShell настройка

### Настройка PowerShell для NPM

**Проблема:** PowerShell ExecutionPolicy блокирует npm/npx

**Решение:**
```powershell
# ВАЖНО: Запускайте от имени администратора
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Или для одной сессии:
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

### Доступные npm скрипты

```json
{
  "scripts": {
    "dev": "vite",              # Запуск dev сервера
    "build": "vite build",      # Сборка проекта
    "preview": "vite preview",  # Предпросмотр сборки
    "test": "vitest run",       # Запуск тестов
    "test:watch": "vitest",     # Тесты в watch режиме
    "test:coverage": "vitest run --coverage"  # Тесты с покрытием
  }
}
```

**Альтернатива (без изменения политики):**
```bash
# Используйте bun вместо npm если доступен:
bun test
bun run dev
```

## 5. Как работает beads

### Что такое beads
Beads — это модель распределения задач, где каждая "бусина" (bead) представляет собой атомарную задачу, которую можно распараллелить.

### Принцип работы

**Бусинки (beads):**
- Атомарные операции
- Легко тестируемы
- Можно выполнять независимо
- Минимум зависимостей

**Пример beads в проекте:**
```
free_explore_feature/
├── beads/
│   ├── movement-controls.md     # WASD переключение
│   ├── camera-physics.md        # Коллизии камеры
│   ├── ui-hud.md                # Индикатор режима
│   └── analytics-events.md      # Трекинг событий
```

**Workflow с beads:**
1. Декомпозируйте фичу на beads
2. Создайте отдельный worktree/ветку для каждой
3. Параллельно реализуйте каждую beads
4. После завершения — merge/PR

## 6. Бонус: Оркестратор-Архитектор-Кодер Pipeline

### Полный pipeline development

```
[ОРКЕСТРАТОР] → [АРХИТЕКТОР] → [КОДЕРЫ] → [ТЕСТЫ] → [ИТОГОВЫЙ ДОК]
       ↓              ↓             ↓
   .kilo/skills/   .kilo/plans/   src/    
```

### Этапы:

**1. Оркестратор (Вы):**
- Формулирует задачу через `/agent_manager`
- Декомпозирует на subtasks
- Распределяет задачи агентам

**2. Архитектор (Agent):**
- Анализирует codebase
- Создаёт план в `.kilo/plans/`
- Определяет зависимости и API

**3. Кодеры (Agent/agents):**
- Реализуют задачи в worktrees
- Пишут код с пометками `@feature`, `@method`
- Создают тесты

**4. Тесты:**
- Автоматически запускаются в CI
- Локально: `npm run test:coverage`

**5. Итоговый дизайн-док:**
- Обновляет `.kilo/state.json`
- Добавляет ссылки в документацию

### Пример оркестрации:

```markdown
# docs/2026-06-08_orchestration-pipeline.md

## Task: Реализовать free_explore

### Subtasks:
1. [x] player-controller - src/stores/playerStore.ts # @feature:player-movement
2. [ ] camera-physics - src/systems/movement.ts # @method:updatePosition
3. [ ] ui-hud - src/components/ControlHints.tsx # @method:renderHints
4. [ ] analytics - src/utils/tracker.ts # @method:trackModeSwitch

### Методы:
- `usePlayerStore.getState().setMode('orbit')` # line:21
- `updatePosition(delta)` # line:45 в movement.ts
```

### Автоматическое обновление AGENTS.md

После завершения фичи:
```bash
# Обновить статус
.kilo/command/complete_feature <feature-id>

# Добавить новые команды
.kilo/command/continue_work
```

### Пример workflow для фичи:

```bash
# 1. Начало
/continue_work

# 2. Создание агентов для subtasks
/agent_manager mode=worktree versions=true tasks=[
  {prompt: "Реализовать MovementSystem с коллизиями", name: "movement", branchName: "feat-movement"},
  {prompt: "Создать UI для переключения режимов", name: "ui-hud", branchName: "feat-ui-hud"}
]

# 3. После завершения - создать PR
gh pr create --title "feat: free_explore" --body "Implements free exploration mode"

# 4. Завершить фичу
/agent_manager mode=worktree tasks=[{prompt: "/execute .kilo/command/complete_feature free_explore", name: "complete"}]
```