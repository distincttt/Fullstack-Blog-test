# BLOG TEST

Fullstack-приложение на **Laravel (API)** + **React** + **Tailwind CSS**.

---

## 📦 Установка и запуск

```bash
git clone https://github.com/distincttt/Fullstack-Blog-test.git
cd blog-frontend
bun install
bun run build
cd ..
cp .env.example .env
php artisan key:generate
Запустить приложение Docker
docker-compose up --build -d
docker exec -it laravel_app php artisan migrate --seed
Открыть в браузере http://localhost:8000
```
