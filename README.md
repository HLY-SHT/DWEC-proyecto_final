# Aplicación Angular - Listado de Peleas

Esta es una aplicación desarrollada en Angular que consume una API para obtener información sobre peleas de MMA y boxeo. Permite filtrar peleas por año, evento o peleador.

## Características
- Buscar peleas por año.
- Buscar peleas por número de evento o apellido del luchador.
- Buscar peleas por nombre del peleador.
- Uso de `HttpClient` para realizar peticiones HTTP a la API.
- Procesamiento de respuestas con datos JSON anidados en HTML.
- Implementación de formularios en Angular.

## Tecnologías utilizadas
- Angular
- TypeScript
- HTML
- CSS
- Bootstrap (opcional para el diseño de la interfaz)
- API externa para la obtención de datos

## Instalación y Ejecución
### Prerrequisitos
Asegúrate de tener instalado Node.js y Angular CLI:
```sh
npm install -g @angular/cli
```

### Clonar el repositorio
```sh
git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio
```

### Instalar dependencias
```sh
npm install
```

### Ejecutar la aplicación
```sh
ng serve
```
La aplicación estará disponible en `http://localhost:4200/`.

## Estructura del Proyecto
```
/src
  |-- app
      |-- listado-peleas-anio
      |   |-- listado-peleas-anio.component.ts
      |   |-- listado-peleas-anio.component.html
      |   |-- listado-peleas-anio.component.css
      |
      |-- listado-peleas-evento
      |   |-- listado-peleas-evento.component.ts
      |   |-- listado-peleas-evento.component.html
      |   |-- listado-peleas-evento.component.css
      |
      |-- listado-peleas-peleador
      |   |-- listado-peleas-peleador.component.ts
      |   |-- listado-peleas-peleador.component.html
      |   |-- listado-peleas-peleador.component.css
      |
      |-- peleas.service.ts  // Servicio para obtener los datos de la API
      |-- ipeleas.ts         // Interfaz para estructurar los datos
```

## API Consumida
Se utiliza la API de `https://fightingtomatoes.com/API` para obtener los datos de las peleas.

### Endpoints utilizados
- **Obtener peleas por año:** `https://fightingtomatoes.com/API/{api-key}/{year}/any/any`
- **Obtener peleas por evento:** `https://fightingtomatoes.com/API/{api-key}/any/{event}/any`
- **Obtener peleas por peleador:** `https://fightingtomatoes.com/API/{api-key}/any/any/{fighter}`

## Autores
- [Tu Nombre]
- [Tu Email]
- [Tu GitHub]

## Licencia
Este proyecto está bajo la licencia MIT. Puedes consultar el archivo `LICENSE` para más detalles.

