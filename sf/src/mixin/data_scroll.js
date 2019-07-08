import Vue from 'vue'
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
import BScroll from 'better-scroll'
import data from '../utils/data'
import '@/utils/filter'
import _ from 'lodash'

Vue.mixin({
    data() {
        return {
            page: 0
        }
    },
    methods: {
        async data_scroll(vm) {
            let page = 0
            Indicator.open({
                text: 'Loading...',
                spinnerType: 'fading-circle'
            });
            let render = await data.get()
            let data_group = _.chunk(render, 3)
            let length = data_group.length

            let bscroll = new BScroll(".wrapper", {
                pullUpLoad: true,
                click: true
            })

            bscroll.on("pullingUp", async function() {
                if (page < length) {
                    var array = []
                    Indicator.open()
                    let render = await data.get()
                    let data_group = _.chunk(render, 3)
                    for (var i = 0; i <= page; i++) {
                        if (array === '') {
                            array = [...data_group[0]]
                        } else {
                            array = [...array, ...data_group[i]]
                        }
                    }
                    vm.$nextTick(() => {
                        page++
                        this.refresh()
                        this.finishPullUp()
                        Indicator.close()
                    })
                    vm.data1 = array
                } else {
                    this.finishPullUp()
                    Toast({
                        message: '已经到底了\(^o^)/~',
                        position: 'bottom',
                        duration: 2000
                    });
                }
            })
            return data_group[page]
        }
    }
})