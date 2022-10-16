<template>
  <div>
    <label :for="select">What {{ select }} do you want?</label>

    <select
      :name="select"
      :id="select"
      @change="$emit('change', $event.target.value)"
    >
      <option value="">-- All Cuisines --</option>
      <option v-for="option in selectOptions" :key="option.id" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: "cuisine",
    },
    selectOptions: {
      type: Array,
      default: () => ["tacos", "pizza", "dim sum"],
    },
  },
};
</script>

<style></style>
