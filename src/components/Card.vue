<template>
    <div class="card">
        <section>
            <div>较上日+ {{ store.chinaAdd.localConfirmH5 }}</div>
            <div>{{ store.chinaTotal.localConfirm }}</div>
            <div>本土现有确诊</div>
        </section>
        <section>
            <div>较上日+ {{ store.chinaAdd.nowConfirm }}</div>
            <div>{{ store.chinaTotal.nowConfirm }}</div>
            <div>现有确诊</div>
        </section>
        <section>
            <div>较上日+ {{ store.chinaAdd.confirm }}</div>
            <div>{{ store.chinaTotal.confirm }}</div>
            <div>累计确诊</div>
        </section>
        <section>
            <div>较上日+ {{ store.chinaAdd.noInfect }}</div>
            <div>{{ store.chinaTotal.noInfect }}</div>
            <div>无症状感染者</div>
        </section>
        <section>
            <div>较上日+ {{ store.chinaAdd.importedCase }}</div>
            <div>{{ store.chinaTotal.importedCase }}</div>
            <div>境外输入</div>
        </section>
        <section>
            <div>较上日+ {{ store.chinaAdd.dead }}</div>
            <div>{{ store.chinaTotal.dead }}</div>
            <div>累计死亡</div>
        </section>
    </div>
</template>

<script setup lang='ts'>
import { useStore } from '@/stores';
const store = useStore()
</script>

<style scoped lang='scss'>
$itemColor: #41b0db;
$itemBg: #223651;
$itemBorder: #212028;

.card {
    font-size: 10px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, auto);
    section{
        background: $itemBg;
        border: 1px solid $itemBorder;
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        div:nth-child(2){
            color: $itemColor;
            padding: 5px;
            font-size: 15px;
            font-weight: 600;
        }
    }
}
</style>