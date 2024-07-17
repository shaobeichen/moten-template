<template>
  <div style="width: 300px; margin: 0 auto">
    <form :onsubmit="submit">
      <label for="name">姓名</label>
      <input type="text" id="name" name="name" />
      <br />

      <label for="desc">简介</label>
      <input type="text" id="desc" name="desc" />
      <br />

      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const submit = (e: Event) => {
  const value = (e.target as HTMLFormElement).elements
  const name = value.name.value
  const desc = value.desc.value
  console.warn(name + '-' + desc)

  if (!(name.length > 1 && name.length < 5)) {
    alert('姓名长度不正确')
    return
  } else if (!(desc.length > 1 && desc.length < 5)) {
    alert('简介长度不正确')
    return
  }

  alert('成功')

  const rules = {
    name: {
      rule: name.length > 1 && name.length < 5,
      message: '姓名长度不正确',
    },
    desc: {
      rule: desc.length > 1 && desc.length < 5,
      message: '姓名长度不正确',
    },
  }
  const data = {
    name,
    desc,
  }
  for (const key of Object.keys(data)) {
    const item = rules[key]
    if (!item.rule) {
      alert(item.message)
      return
    }
  }

  const item = Object.keys(data).find((key) => !rules[key].rule)
  if (item) alert(item.message)

  alert('成功')
}
</script>

<style scoped>
input {
  border: 1px solid grey;
}
</style>
