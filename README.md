# Cypress SauceDemo - Suite de Pruebas E2E

Suite de pruebas automatizadas end-to-end para el sitio [SauceDemo](https://www.saucedemo.com), desarrollada como parte del curso de DevOps en la Universidad Mariano Gálvez de Guatemala.

---

## 🧪 ¿Qué se prueba?

- Login con credenciales válidas e inválidas
- Flujo completo de compra (agregar producto → carrito → checkout)
- Validaciones de mensajes de error

---

## 🛠️ Tecnologías

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📂 Estructura del proyecto
cypress/
├── e2e/
│   ├── login.cy.js
│   └── checkout.cy.js
├── fixtures/
└── support/

---

## 🚀 Cómo ejecutar

```bash
# Instalar dependencias
npm install

# Abrir Cypress en modo visual
npx cypress open

# Ejecutar en modo headless
npx cypress run
```

---

## 📸 Demo

> _Agrega aquí un screenshot o GIF de los tests corriendo_

---

## 🔗 Relacionado

Este proyecto se integra con el pipeline de CI/CD en [jenkins-devsecops-pipeline](https://github.com/ryaty1-RM/jenkins-devsecops-pipeline)

---

## 🌿 Estrategia de Branches

Este repositorio utiliza **GitHub Flow**:

| Branch | Propósito |
|--------|-----------|
| `main` | Código estable y listo para producción |
| `develop` | Rama de desarrollo e integración |

**Flujo de trabajo:**
1. Todo el desarrollo se hace en `develop`
2. Cuando el código está listo y probado, se hace merge a `main`
3. `main` siempre contiene código funcional
