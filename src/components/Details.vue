<template>
      <table class="table" :cellspacing="0" :border="1">
        <thead>
          <tr>
            <th>地区</th>
            <th>新增确诊</th>
            <th>累计确诊</th>
            <th>治愈</th>
            <th>死亡</th>
          </tr>
        </thead>
        <transition-group tag="tbody" enter-active-class="animate__animated  animate__flipInY">
          <tr :key="Math.random()" v-for="item in store.item">
            <td align="center">{{ item.name }}</td>
            <td align="center">{{ item.today.confirm }}</td>
            <td align="center">{{ item.total.confirm }}</td>
            <td align="center">{{ item.total.heal }}</td>
            <td align="center">{{ item.total.dead }}</td>
          </tr>
        </transition-group>

      </table>
</template>

<script setup lang='ts'>
import { useStore } from '../stores'
const store = useStore()

</script>

<style scoped lang='scss'>
.table {
  width: 100%;
  background-color: #212028;

  font-size: 10px;
  tr {
    th {
      padding: 5px;
      white-space: nowrap;
    }

    td {
      padding: 5px 10px;
      width: 100%;
      white-space: nowrap;
    }
  }
}
</style>