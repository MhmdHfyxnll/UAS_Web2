FROM php:8.3-apache

# Install system packages dan PHP extensions
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    libicu-dev \
    libzip-dev \
    && docker-php-ext-install \
        intl \
        mysqli \
        pdo \
        pdo_mysql \
        zip \
    && a2enmod rewrite \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy composer files terlebih dahulu
COPY composer.json composer.lock ./

# Install dependencies
RUN composer install \
    --no-dev \
    --optimize-autoloader \
    --no-interaction

# Copy seluruh project
COPY . .

# Set Apache DocumentRoot ke folder public
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' \
    /etc/apache2/sites-available/*.conf \
    && sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' \
    /etc/apache2/apache2.conf

# Permission untuk writable
RUN chown -R www-data:www-data writable \
    && chmod -R 775 writable

EXPOSE 80

CMD ["apache2-foreground"]