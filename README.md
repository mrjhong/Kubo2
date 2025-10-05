# 🎬 Endpoint: Crear Película

## 📍 URL

`POST {{ _.url_api }}/movies`

> **Ejemplo:** `POST http://localhost:3000/api/movies`

---

##  Descripción

Este *endpoint* permite **registrar una nueva película** en la base de datos.
Se requiere enviar los siguientes campos en el cuerpo de la solicitud (JSON):
* **Nombre** (`name`)
* **ID de la Categoría** (`category`)
* **Fecha de Lanzamiento** (`releaseDate`) en formato `YYYY-MM-DD`.

---

##  Autenticación

Para acceder a este *endpoint*, se debe incluir un **Bearer Token** en el encabezado (`Header`) de la solicitud. Este *token* se obtiene al iniciar sesión exitosamente en el *endpoint* de autenticación:
* **Endpoint de Login:** `POST /auth/login`
* **Encabezado:** `Authorization: Bearer <el_token_obtenido>`

---
---

##  Categorías Disponibles

| ID | Categoría |
|----|------------|
| 1  | Terror |
| 2  | Suspenso |
| 3  | Drama |
| 4  | Comedia |

##  Cuerpo de la Solicitud (JSON)

| Campo | Tipo | Requerido | Descripción |
| :--- | :--- | :--- | :--- |
| `name` | `string` | Sí | El título de la película. |
| `category` | `integer` | Sí | El ID numérico de la categoría. |
| `releaseDate` | `string` | Sí | La fecha de estreno en formato `YYYY-MM-DD`. |



```json
{
  "name": "Fast and Furious 14",
  "category": 1, 
  "releaseDate": "2025-10-04"
}
```

# 👁 Endpoint: Obtener Película por ID

## 📍 URL

`GET {{ _.url_api }}/movies/show/{id}`

> **Ejemplo:** `GET http://localhost:3000/api/movies/show/33`

---

##  Descripción

Este *endpoint* permite **obtener los detalles de una película específica** utilizando su **ID**.

###  Registro de Vista
se debe proporcionar un **Bearer Token válido** en la solicitud, para que el sistema automáticamente registre que el usuario autenticado ha "visto" o interactuado con la película.



---

##  Autenticación

Para registrar la vista a nombre del usuario, debe incluir el **Bearer Token** en el encabezado (`Header`) de la solicitud.

* **Encabezado:** `Authorization: Bearer <el_token_obtenido>`

---

##  Parámetros de la URL

| Parámetro | Tipo | Requerido | Descripción |
| :--- | :--- | :--- | :--- |
| `id` | `integer` | Sí | El **ID numérico** de la película que se desea obtener. |

---

##  Respuesta Exitosa (Código: 200 OK)

Devuelve un objeto JSON con los detalles de la película.

```json
{
  "id": 33,
  "name": "The Dark Knight",
  "category_id": "Suspenso",
  "release_date": "2011-02-11T05:00:00.000Z",
  "created_at": "2025-10-05T04:30:51.000Z"
}

```
# ✨ Endpoint: novedades 

## 📍 URL

POST http://localhost:3000/api/movies/news
## 📝 Descripción

Este endpoint permite obtener las películas más recientes que se han estrenado.

La lógica de la consulta filtra todas las películas cuya fecha de lanzamiento (`releaseDate`) sea menor o igual a 21 días respecto a la fecha actual.

## 🔒 Autenticación

Este endpoint está diseñado para ser de acceso público.

- No requiere la inclusión de un Bearer Token.

## ⚙️ Parámetros

Este endpoint no requiere parámetros de URL ni de consulta (query parameters).

## 💡 Respuesta Exitosa (Código: 200 OK)

Devuelve un array de objetos JSON con los detalles de las películas que cumplen con el criterio de haber sido estrenadas en los últimos 21 días.

```json
{
  "movies": [
    {
      "id": 51,
      "name": "fast and furios 14",
      "category_id": null,
      "release_date": "2025-10-04T05:00:00.000Z",
      "created_at": null
    }
  ],
  "pages": {
    "total": 1,
    "totalPages": 1,
    "limit": 10,
    "offset": 0,
    "currentPage": 1
  }
}
```
# ✨ Endpoint: peliculas

## 📍 URL

POST http://localhost:3000/api/movies?category=1&orderbyrelease=1&pagination=1

##  Descripción

Este endpoint permite obtener un listado de películas con diversos filtros y opciones de ordenamiento.

##  Autenticación

Este endpoint está diseñado para ser de acceso público.

- No requiere la inclusión de un Bearer Token.

##  Parámetros de Consulta

| Parámetro | Tipo | Descripción | Valores |
|-----------|------|-------------|----------|
| `category` | integer | Filtra por categoría de película | **1** = Terror<br>**2** = Suspenso<br>**3** = Drama<br>**4** = Comedia |
| `orderbyrelease` | integer | Ordena por fecha de lanzamiento | **1** = Ascendente<br>**-1** = Descendente<br>**0** = Orden por fecha de ingreso |
| `pagination` | integer | numero de pagina cada 10 registros | 1 hasta el numero de paginas devueltas |

##  Categorías Disponibles

| ID | Categoría |
|----|-----------|
| 1  | Terror    |
| 2  | Suspenso  |
| 3  | Drama     |
| 4  | Comedia   |

##  Ordenamiento (orderbyrelease)

| Valor | Descripción |
|-------|-------------|
| 1 | Orden ascendente por fecha de lanzamiento |
| -1 | Orden descendente por fecha de lanzamiento |
| 0 | Orden por fecha de ingreso al sistema |

##  Respuesta Exitosa (Código: 200 OK)

```json
{
  "movies": [
    {
      "id": 51,
      "name": "Ejemplo de Película",
      "category_id": 1,
      "release_date": "2024-10-04T05:00:00.000Z",
      "created_at": "2024-01-15T10:30:00.000Z"
    }
  ],
  "pages": {
    "total": 1,
    "totalPages": 1,
    "limit": 10,
    "offset": 0,
    "currentPage": 1
  }
}
```
# ✨ Endpoint: Usuarios y peliculas vistas

## 📍 URL

POST http://localhost:3000/api/auth/users

##  Descripción

Este endpoint permite obtener todos los usuarios registrados en el sistema junto con las películas que han visto. 

Si un usuario ha visto una película múltiples veces, el endpoint mostrará la película la cantidad de veces que ha sido vista.

##  Autenticación

Este endpoint está diseñado para ser de acceso público.

- No requiere la inclusión de un Bearer Token.


##  Parámetros

Este endpoint no requiere parámetros de URL ni de consulta (query parameters).

##  Respuesta Exitosa (Código: 200 OK)

Devuelve un array de objetos JSON con los usuarios y las películas que han visto, incluyendo el conteo de visualizaciones.

```json
[
	{
		"user": {
			"id": 1,
			"username": null
		},
		"viewedForUser": [
			{
				"name": "It"
			},
			{
				"name": "It"
			},
			{
				"name": "It"
			},
			{
				"name": "It"
			}
		]
	},
	{
		"user": {
			"id": 2,
			"username": "jhon"
		},
		"viewedForUser": [
			{
				"name": "Una Esposa de Mentira"
			},
			{
				"name": "Una Esposa de Mentira"
			}
		]
	},
	{
		"user": {
			"id": 3,
			"username": "jhon"
		},
		"viewedForUser": []
	},
	{
		"user": {
			"id": 4,
			"username": "jhon"
		},
		"viewedForUser": []
	}
]
```
# ✨ Endpoint: Inicio de Sesión

## 📍 URL

POST http://localhost:3000/api/auth/login

##  Descripción

Este endpoint permite a los usuarios iniciar sesión en el sistema utilizando sus credenciales (username y password).

##  Autenticación

Este endpoint es de acceso público.
- No requiere token de autenticación para su uso.

##  Cuerpo de la Petición (Body)

El cuerpo de la petición debe ser enviado en formato JSON:

```json
{
  "username": "jhon",
  "password": "123456"
}

```
##  respuesta de la peticion

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJqaG9uIiwiaWF0IjoxNzU5Njc1NjE3LCJleHAiOjE3NTk2ODY0MTd9.Ojr0MwlrPwQgQQtKwa1knLOh3P5nh3dFHq7mM_E0Vqk"
}
```
# ✨ Endpoint: Inicio de Sesión

## 📍 URL

POST http://localhost:3000/api/auth/register


## 📝 Descripción

Este endpoint permite registrar nuevos usuarios en el sistema.

## 🔒 Autenticación

Este endpoint es de acceso público.
- No requiere token de autenticación para su uso.

## 📦 Cuerpo de la Petición (Body)

El cuerpo de la petición debe ser enviado en formato JSON:

```json
{
  "username": "jhon",
  "password": "123456"
}

```
##  respuesta de la peticion

```json

{
  "message": "Usuario registrado exitosamente"
}
