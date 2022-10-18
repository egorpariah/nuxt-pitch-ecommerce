<template>
  <div class="wrapper">
    <label
      class="label"
      for="input"
      >{{ inputLabel }}</label
    >
    <input
      v-bind:value="value"
      v-on:input="updateInput"
      class="input"
      :type="type"
      id="input"
    />
  </div>
</template>

<script>
  export default {
    name: 'BaseInput',
    props: {
      inputLabel: String,
      type: String,
      value: [String, Number],
    },
    methods: {
      updateInput(e) {
        this.$emit('input', e.target.value);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
  }
  .input {
    color: $darkPurple;
    border: 1px solid $lightGray;
    outline: none;
    background: #ffffff;
    height: 40px;
    padding: 12px 24px;
    border-radius: 20px;

    &::placeholder {
      color: $gray;
    }
  }

  .label {
    margin-left: 8px;
    font-size: 12px;
    margin-bottom: 4px;
  }
</style>
