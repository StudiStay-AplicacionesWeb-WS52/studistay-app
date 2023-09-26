<script>
export default {
  name: 'post-list',

  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'First Post',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          address: 'Av. La Paz 123',
          rating: 4,
          nearUniversity: 'UPC',
          price: 10.2,
          photo: 'https://source.unsplash.com/random/500X500?rooms'
        },
        {
          id: 2,
          title: 'Second Post',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          address: 'Av. La Marina 123',
          rating: 4,
          nearUniversity: 'UPC',
          price: 10.2,
          photo: 'https://source.unsplash.com/random/500X500?rooms'
        },
        {
          id: 3,
          title: 'Third Post',
          description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ssssssssssssssssssssssssssssssss.',
          address: 'Av. Brasil 123',
          rating: 4,
          nearUniversity: 'UPC',
          price: 10.2,
          photo: 'https://source.unsplash.com/random/500X500?rooms'
        }
      ]
    }
  }
}
</script>

<template>
  <pv-dataview :value="posts">
    <template #list="slotProps">
      <div class="col-12">
        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img
            class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            :src="slotProps.data.photo"
            :alt="slotProps.data.name"
          />
          <div
            class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
          >
            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
              <div class="text-2xl font-bold text-900 title-secondary">{{ slotProps.data.title }}</div>

              <!-- ICONOS -->
              <div class="flex align-items-center gap-3">
                <span class="flex align-items-center gap-2">
                  <i class="pi pi-map-marker icon-secondary"></i>
                  <span class="paragraph">{{ slotProps.data.address }}</span>
                </span>
              </div>

              <div class="flex align-items-center gap-3">
                <span class="flex align-items-center gap-2">
                  <i class="pi pi-star icon-secondary"></i>
                  <span class="paragraph">{{ slotProps.data.rating }}</span>
                </span>
              </div>

              <div class="flex align-items-center gap-3">
                <span class="flex align-items-center gap-2">
                  <i class="pi pi-building icon-secondary"></i>
                  <span class="paragraph">Cerca a {{ slotProps.data.nearUniversity }}</span>
                </span>
              </div>

              <!-- DESCRIPCION -->
              <p class="text-limit paragraph">
                {{ slotProps.data.description }}
              </p>
            </div>

            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <!-- PRECIO -->
              <span class="text-2xl font-semibold title-primary">${{ slotProps.data.price }}</span>

              <!-- BOTONES -->
              <div class="flex align-items-center gap-2 p-mt-2">
                <pv-button icon="pi pi-phone" class="rounded-button-secondary" rounded outlined />
                <pv-button icon="pi pi-heart" class="rounded-button-secondary" rounded outlined />
                <pv-button
                  icon="pi pi-chevron-right"
                  class="button-secondary"
                  iconPos="right"
                  label="Saber más"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </pv-dataview>
</template>

<style>
.p-mt-2 {
  margin-top: 7rem;
}

.text-limit {
  width: 600px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Media query para estilos en vista móvil */
@media screen and (max-width: 768px) {
  .text-limit {
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .p-mt-2 {
    margin-top: 0;
  }
}
</style>
