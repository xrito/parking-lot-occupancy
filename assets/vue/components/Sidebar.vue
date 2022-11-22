<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-4">Parking</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <RouterLink class="nav-link active" aria-current="page" :to="{ name: 'admin'  }">
          <i class="bi pe-none bi-grid"> </i>
          Dashboard
        </RouterLink>
      </li>
    </ul>
    <hr>
  </div>
</template>
