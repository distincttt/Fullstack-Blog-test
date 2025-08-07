FROM php:8.2-fpm

# Установка зависимостей (если нужно)
RUN apt-get update && apt-get install -y \
    libonig-dev \
    libxml2-dev \
    zip unzip curl

# Установка Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Настройка PHP-FPM: слушать на 0.0.0.0:9000
RUN sed -i 's|^listen = .*|listen = 0.0.0.0:9000|' /usr/local/etc/php-fpm.d/www.conf

# Копирование исходников
WORKDIR /var/www
COPY . .

CMD ["php-fpm"]