# Feature Development Process

## State Management
- `.kilo/state.json` - текущий прогресс фич
- `docs/feature-index.md` - список всех фич с приоритетами
- `docs/YYYY-MM-DD_<feature>_gd-spec.md` - спецификации

## Commands
- `/continue_work` - продолжить с последней задачи
- `/complete_feature` - завершить текущую фичу

## Workflow
1. Начало: читаем state.json → понимаем текущую фичу
2. Спецификация: gd-doc-kickoff skill интервью
3. Завершение: complete_feature обновляет state.json