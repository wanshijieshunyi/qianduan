window.addEventListener('load', () => {
    console.log('窗口文档区域高度', document.body.clientHeight);
    console.log('窗口文档可见区域高度', document.body.offsetHeight);
    console.log('窗口文档区域宽度', document.body.clientWidth);
    let bgc = document.querySelector('.bgc')
    let bg_width = document.body.clientWidth
    let bg_height = document.body.clientHeight
    bgc.style.width = bg_width + 'px'
    bgc.style.height = bg_height + 'px'
        // 头部区域
    let top_group = document.querySelector('.top_group')
    let top_language = document.querySelector('.top_language')
    let top_group_text = document.querySelector('.top_group_text')
    let top_language_text = document.querySelector('.top_language_text')
    let index1 = 1
    let index2 = 1
    top_group.addEventListener('click', () => {

        if (index1 % 2 === 1) {
            top_language_text.style.display = 'none'
            top_language.style.backgroundColor = '#333'
            top_language.style.color = '#fff'
            top_group_text.style.display = 'block'
            top_group.style.backgroundColor = '#fff'
            top_group.style.color = '#000'
            index1++
            if (index2 % 2 === 0) {
                index2++
            }
        } else if (index1 % 2 === 0) {
            top_group_text.style.display = 'none'
            top_group.style.backgroundColor = '#333'
            top_group.style.color = '#fff'
            index1++
        }

    })
    top_language.addEventListener('click', () => {
        if (index2 % 2 === 1) {
            top_group_text.style.display = 'none'
            top_group.style.backgroundColor = '#333'
            top_group.style.color = '#fff'
            top_language_text.style.display = 'block'
            top_language.style.backgroundColor = '#fff'
            top_language.style.color = '#000'
            index2++
            if (index1 % 2 === 0) {
                index1++
            }
        } else if (index2 % 2 === 0) {
            top_language_text.style.display = 'none'
            top_language.style.backgroundColor = '#333'
            top_language.style.color = '#fff'
            index2++
        }
    })

    // tab切换
    // 获得页面所有元素
    let person = document.querySelector('.person')
    let plan = document.querySelector('.plan')
    let service = document.querySelector('.service')
    let cooperation = document.querySelector('.cooperation')
    let huawei = document.querySelector('.huawei')

    let person_text = document.querySelector('.person_text')
    let plan_text = document.querySelector('.plan_text')
    let service_text = document.querySelector('.service_text')
    let cooperation_text = document.querySelector('.cooperation_text')
    let huawei_text = document.querySelector('.huawei_text')
    person.addEventListener('mouseenter', () => {
        person_text.className = 'person_text reveal'
        bgc.style.display = 'block'

    })

    person.addEventListener('mouseleave', () => {
        person_text.className = 'person_text hide'
        bgc.style.display = 'none'
    })

    plan.addEventListener('mouseenter', () => {
        plan_text.className = 'plan_text reveal '
        bgc.style.display = 'block'
    })
    plan.addEventListener('mouseleave', () => {
        plan_text.className = 'plan_text hide'
        bgc.style.display = 'none'
    })

    service.addEventListener('mouseenter', () => {
        service_text.className = 'service_text reveal '
        bgc.style.display = 'block'
    })
    service.addEventListener('mouseleave', () => {
        service_text.className = 'service_text hide'
        bgc.style.display = 'none'
    })


    cooperation.addEventListener('mouseenter', () => {
        cooperation_text.className = 'cooperation_text reveal '
        bgc.style.display = 'block'
    })
    cooperation.addEventListener('mouseleave', () => {
        cooperation_text.className = 'cooperation_text hide'
        bgc.style.display = 'none'
    })

    huawei.addEventListener('mouseenter', () => {
        huawei_text.className = 'huawei_text reveal '
        bgc.style.display = 'block'
    })
    huawei.addEventListener('mouseleave', () => {
        huawei_text.className = 'huawei_text hide'
        bgc.style.display = 'none'
    })
    person_text.addEventListener('mouseenter', () => {
        person_text.className = 'person_text reveal'
        bgc.style.display = 'block'
    })
    person_text.addEventListener('mouseleave', () => {
        person_text.className = 'person_text hide'
        bgc.style.display = 'none'
    })
    plan_text.addEventListener('mouseenter', () => {
        plan_text.className = 'plan_text reveal'
        bgc.style.display = 'block'
    })
    plan_text.addEventListener('mouseleave', () => {
        plan_text.className = 'plan_text hide'
        bgc.style.display = 'none'
    })
    service_text.addEventListener('mouseenter', () => {
        service_text.className = 'service_text reveal'
        bgc.style.display = 'block'
    })
    service_text.addEventListener('mouseleave', () => {
        service_text.className = 'service_text hide'
        bgc.style.display = 'none'
    })
    cooperation_text.addEventListener('mouseenter', () => {
        cooperation_text.className = 'cooperation_text reveal'
        bgc.style.display = 'block'
    })
    cooperation_text.addEventListener('mouseleave', () => {
        cooperation_text.className = 'cooperation_text hide'
        bgc.style.display = 'none'
    })
    huawei_text.addEventListener('mouseenter', () => {
        huawei_text.className = 'huawei_text reveal'
        bgc.style.display = 'block'
    })
    huawei_text.addEventListener('mouseleave', () => {
            huawei_text.className = 'huawei_text hide'
            bgc.style.display = 'none'
        })
        // 页面滚动，导航栏固定定位

    const mousewheel = function(e) {
        e = e || window.event;
        let menus = document.querySelector('.menus')
        let t = document.documentElement.scrollTop
        if (e.wheelDelta) {
            if (e.wheelDelta > 0) {
                menus.className = 'fixedNav menus'
                if (t <= 30) {
                    menus.className = 'menus'
                }
                // console.log("滑轮向上滚动");
            }
            if (e.wheelDelta < 0) {
                // console.log("滑轮向下滚动");
                menus.className = 'menus'
            }
        }
    }
    window.addEventListener('mousewheel', mousewheel)


    // 回到顶部
    const backTop = () => {
        let backTop = document.querySelector('.backTop')


        window.onscroll = () => {
            let top = document.documentElement.scrollTop
                // console.log(top);
            if (top > 300) {
                backTop.style.opacity = '1'
            } else {
                backTop.style.opacity = '0'

            }
        }
        backTop.addEventListener('click', () => {
            // let temp = document.documentElement.scrollTop
            // console.log(temp);
            // setInterval(() => {
            //     let step = temp / 10
            //     document.documentElement.scrollTop = '0'
            // }, 2000)
            animate(window, 0)
        })
        const animate = (obj, target) => {
            clearInterval(obj.timer)
            obj.timer = setInterval(() => {
                let step = (target - window.pageYOffset) / 10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (window.pageYOffset == target) {
                    clearInterval(obj.timer)
                }
                window.scroll(0, window.pageYOffset + step);
            }, 10)
        }
    }
    window.addEventListener('scroll', backTop())

    // 主题点击
    let as = document.querySelectorAll('.main_til ul li a')
    let uls = document.querySelectorAll('.main_content ul')
    let jumpPage = document.querySelector('.jumpPage')
    for (let i = 0; i < as.length; i++) {
        console.log(as[i]);
        as[i].addEventListener('click', () => {
            for (let k = 0; k < uls.length; k++) {
                uls[k].style.display = 'none'
            }
            for (let j = 0; j < as.length; j++) {
                as[j].className = ''
            }
            uls[i].style.display = 'block'
            as[i].className = 'bdb_col'
            if (i === 1) {
                jumpPage.style.display = 'none'
            } else if (i === 2) {
                pageClick(11, 1)
            } else if (i === 3) {
                pageClick(10, 1)
            } else if (i === 4) {
                pageClick(15, 1)
            } else if (i === 5) {
                pageClick(2, 1)
            }
        })

    }



    const pageNumBox = document.querySelector('.page_num');
    let jumpBoxInput = document.querySelector('.jumpBox input')
    let jump = document.querySelector('.jump')

    let pageList;
    const renderPage = (totalPage, currentPage) => {
        console.log('渲染页', currentPage);
        let startPage, endPage;
        let html = '<a href="#" class="pn_prev">&lt; </a>';
        // if (currentPage == 1) {
        //     return html = '<a href="#" class="pn_prev" disabled>&lt; </a>';
        // }
        if (totalPage <= 7) {
            // 1.当总页数小于7的时候，有多少页，展示多少页
            startPage = 1;
            endPage = totalPage;
            html = renderHtml(startPage, endPage, html, Number(currentPage));
        } else {
            if (currentPage < 5) {
                startPage = 1;
                endPage = 6;
                html = renderHtml(startPage, endPage, html, currentPage);
                html += `<a href="#" class="dotted">...</a><a key=${totalPage}>${totalPage}</a>`
            } else if (currentPage >= 5) {
                console.log('页数大于5', currentPage);
                if (currentPage + 2 >= totalPage) {
                    startPage = totalPage - 4;
                    endPage = totalPage;
                    html += '<a key="1">1</a><a key="2">2</a><a href="#" class="dotted">...</a>'
                    html = renderHtml(startPage, endPage, html, currentPage);
                } else {
                    startPage = currentPage - 2;
                    endPage = currentPage + 2;
                    html += '<a key="1">1</a><a href="#" class="dotted">...</a>'
                    html = renderHtml(startPage, endPage, html, currentPage);
                    html += `<a href="#" class="dotted">...</a><a key=${totalPage}>${totalPage}</a>`
                }
                // startPage = currentPage -2;
                // endPage = currentPage + 2;
                // html = renderHtml(startPage, endPage,html);
            }

        }
        html += `<a href="javascript:;" class="pn_next">&gt;</a>`;
        return html
    }

    const renderHtml = (startPage, endPage, html, currentPage) => {
        console.log('渲染数据', currentPage);
        for (let i = startPage; i <= endPage; i++) {
            console.log(i);
            if (i === currentPage) {
                html += `<a key='${i}' class="current">${i}</a>`;
            } else {
                html += `<a href='javascript:;' key='${i}'>${i}</a>`
            }

        }
        return html;
    }
    const jumpPageing = (totalPage, currentPage) => {
        jump.addEventListener('click', () => {
            let value = jumpBoxInput.value
                // pageClick(totalPage, value)
            value = Number(value)
            console.log('切换页数据1', value);
            // console.log(totalPage);
            if (value > totalPage || value < 1) {
                return console.log('输入错误，请重新输入');
            } else {
                currentPage = value
                console.log('切换页数据', value);
                console.log('跳转页', currentPage);
                // pageClick(totalPage, currentPage)
                pageNumBox.innerHTML = renderPage(totalPage, currentPage);
                pageClick(totalPage, currentPage)
            }
        })
    }
    const pageClick = (totalPage, currentPage) => {
        console.log('点击页切换', currentPage);
        pageNumBox.innerHTML = renderPage(totalPage, Number(currentPage));
        pageList = document.querySelectorAll('.page_num a');
        // console.log(currentPage);
        pageList.forEach((item) => {
            if (item.getAttribute('class') === 'pn_prev') {
                // 上一页
                if (currentPage === 1) {
                    item.className = 'pn_prev font_disable'
                } else {
                    item.addEventListener('click', (e) => {
                        e.preventDefault()
                            // console.log(item);
                        pageClick(totalPage, currentPage - 1)
                    })
                }
            } else if (item.getAttribute('class') === 'pn_next') {
                // 下一页
                if (currentPage === totalPage) {
                    item.className = "pn_next font_disable"
                } else {
                    item.addEventListener('click', (e) => {
                        e.preventDefault()
                        pageClick(totalPage, currentPage + 1)
                    })
                }
            } else if (item.getAttribute('class') === 'dotted') {
                // 。。。
            } else {

                // console.log(item.getAttribute('key'));
                item.onclick = pageClick.bind(null, totalPage, Number(item.getAttribute('key')));
            }
        })
    }

    pageClick(37, 1)
    jumpPageing(37)
        // 客服
    let customerList = document.querySelector('.customerList')
    let customer = document.querySelector('.customer')
    let off = document.querySelector('.off')
    let bgc1 = document.querySelector('.bgc1')
    bgc1.style.width = bg_width + 'px'
    bgc1.style.height = bg_height + 'px'
    customer.addEventListener('click', () => {
        customerList.style.display = 'block'
        bgc1.style.display = 'block'
        customerList.style.top = window.pageYOffset + 50 + 'px'
        window.addEventListener('scroll', () => {
            console.log('页面滚动高度', window.pageYOffset);
            customerList.style.top = window.pageYOffset + 50 + 'px'
        })
    })
    off.addEventListener('click', () => {
        customerList.style.display = 'none'
        bgc1.style.display = 'none'
    })
})