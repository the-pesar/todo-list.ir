<template>
    <n-card content-style="padding: 0;" :bordered="false">
        <div class="flex justify-center pt-5 pb-7">
            <n-avatar round :size="100"
                :style="{ backgroundColor: 'rgb(0, 186, 124)', fontSize: '27px', fontWeight: '500' }">Pesar</n-avatar>
        </div>
        <n-divider style="margin-top: 0" dashed>
            My Boards
        </n-divider>
        <div class="flex flex-col items-center">
            <div class="flex rounded-3xl p-1 w-10/12 cursor-pointer"
                :class="activeBtn === 'today' ? 'menu-btn-active' : 'menu-btn'" @click="changeActive('today')">
                <i class='bx bx-notepad text-2xl ml-3'></i>
                <button class="ml-6 font-semibold">
                    Today
                </button>
            </div>
            <div class="flex rounded-3xl p-1 w-10/12 mt-3 cursor-pointer"
                :class="activeBtn === 'weekly' ? 'menu-btn-active' : 'menu-btn'" @click="changeActive('weekly')">
                <i class='bx bx-cube text-2xl ml-3'></i>
                <button class="ml-6 font-semibold">
                    Weekly
                </button>
            </div>
            <div class="flex rounded-3xl p-1 w-10/12 mt-3 cursor-pointer"
                :class="activeBtn === 'monthly' ? 'menu-btn-active' : 'menu-btn'" @click="changeActive('monthly')">
                <i class='bx bx-extension text-2xl ml-3'></i>
                <button class="ml-6 font-semibold">
                    Monthly
                </button>
            </div>
            <div class="flex rounded-3xl p-1 w-10/12 mt-3 cursor-pointer"
                :class="activeBtn === 'six-monthly' ? 'menu-btn-active' : 'menu-btn'"
                @click="changeActive('six-monthly')">
                <i class='bx bx-pyramid text-2xl ml-3'></i>
                <button class="ml-6 font-semibold">
                    6-Monthly
                </button>
            </div>
            <div class="flex rounded-3xl p-1 w-10/12 mt-3 cursor-pointer"
                :class="activeBtn === 'yearly' ? 'menu-btn-active' : 'menu-btn'" @click="changeActive('yearly')">
                <i class='bx bx-cube-alt text-2xl ml-3'></i>
                <button class="ml-6 font-semibold">
                    Yearly
                </button>
            </div>
            <div class="flex rounded-3xl p-1 w-10/12 mt-3 cursor-pointer"
                :class="activeBtn === 'vision' ? 'menu-btn-active' : 'menu-btn'"
                @click="changeActive('vision')">
                <i class='bx bx-hive text-2xl ml-3'></i>
                <button class="ml-6 font-semibold">
                    Vision
                </button>
            </div>
        </div>
    </n-card>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const activeBtn = ref("today")

const changeActive = (btn) => {
    activeBtn.value = btn
    router.push({ name: btn })
}

</script>
<style lang="scss" scoped>
.menu-btn-active {
    background-color: rgba(0, 186, 124, .15);
    color: #00ba7c;
    border: 1px dashed rgba(0, 186, 124, .15);
    transition: all 0.25s;
}

.menu-btn {
    border: 1px dashed transparent;

    &:hover {
        color: #00ba7c;
        border: 1px dashed #00ba7c;
        transition: all 0.25s;
    }
}
</style>