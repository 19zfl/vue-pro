<template>
    <el-container class="container">
        <el-header>
            <el-input placeholder="请输入" class="input" v-model="city">
                <template #prepend>城市名：</template>
            </el-input>
        </el-header>
        <el-main class="main">
            <div class="today">
                今天：
                <span>{{ this.todayData.weather ?? this.plc }}{{ this.todayData.temperature ?? this.plc }}</span>
                <span style="margin-left: 20px;">{{ this.todayData.direct ?? this.plc }}</span>
                <span style="margin-left: 100px">{{ this.todayData.date }}</span>
            </div>
            <div class="real">
                <span class="temp">{{ this.realTime.temperature ?? this.plc }}°</span>
                <span class="realInfo">{{ this.realTime.info ?? this.plc }}</span>
                <span class="realInfo" style="margin-left: 20px;">{{ this.realTime.direct ?? this.plc }}</span>
                <span class="realInfo" style="margin-left: 20px;">{{ this.realTime.power ?? this.plc }}</span>
            </div>
            <div class="real">
                <span class="realInfo">空气质量：{{ this.realTime.aqi ?? this.plc }}</span>
                <span class="realInfo" style="margin-left: 20px">湿度：{{ this.realTime.humidity ?? this.plc }}</span>
            </div>
            <div class="future">
                <div class="header">5日天气预报</div>
                <el-table :data="futureData" style="margin-top: 30px">
                    <el-table-column prop="date" label="日期"></el-table-column>
                    <el-table-column prop="temperature" label="湿度"></el-table-column>
                    <el-table-column prop="weather" label="天气"></el-table-column>
                    <el-table-column prop="direct" label="风向"></el-table-column>
                </el-table>
            </div>
        </el-main>
    </el-container>
</template>
<script>
export default ({
    data() {
        return {
            city: "上海",
            weatherData: {},
            todayData: {},
            realTime: {},
            futureData: [],
            plc: "暂无数据",
        }
    },
    methods: {
        requestData() {
            let city = encodeURI(this.city)
            let api = `/simpleWeather/query?city=${city}&key=cffe158caf3fe63aa2959767a503bbfe`
            this.axios.get('/myApi' + api).then((res) => {
                console.log(res.data)
                this.weatherData = res.data
                this.todayData = this.weatherData.result.future[0]
                this.realTime = this.weatherData.result.realtime
                this.futureData = this.weatherData.result.future
            })
        }
    },
    mounted() {
        this.requestData()
    },
    watch: {
        city() {
            this.requestData()
        }
    }
})
</script>
<style scoped>
.container {
    background: linear-gradient(rgb(13, 104, 188), rgb(54, 131, 195));
}
.input {
    width: 300px;
    margin-top: 20px;
}
.today {
    font-size: 20px;
    color: white;
}
.temp {
    font-size: 79px;
    color: white;
}
.realInfo {
    color: white;
}
.future {
    margin-top: 40px;
}
.header {
    color: white;
    font-size: 27px;
}
</style>