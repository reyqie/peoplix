<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'Peoplix') }}</title>
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%237c3aed'/%3E%3Cpath d='M9 21V11h7a4 4 0 0 1 0 8h-3v2H9z' fill='white'/%3E%3C/svg%3E">
    <script>
        const theme = localStorage.getItem('theme') ?? 'dark';
        document.documentElement.classList.toggle('dark', theme === 'dark');
    </script>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead
</head>
<body class="font-sans">
    @inertia
</body>
</html>
