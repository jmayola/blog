## Installation

Run the following commands in order to install all the dependencies.
 ```
compose install
npm install
```

After finishing with the dependencies, we should deploy the local variables & database migrations.

```bash
cp .env.example .env # modified database & APP NAME
php artisan key:generate # generates the APP-KEY, overwrites .env # REQUIRED
php artisan migrate # migrates changes to database
```

Run the application.

```bash
composer run dev
```

