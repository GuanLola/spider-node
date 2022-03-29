
const { request } = require('./request')

//获取文章链接
async function getArticleLinks(params) {
  const { data } = await request({
    methods: 'GET',
    url: '/',
    params: {
      page: params.page || 1,
      tab: 'all',
    }
  })
  // console.log(data)
}


async function main () {
  console.log(1)
  try {
    await getArticleLinks({
      page: 1, //从 第 1 页开始抓起
    })
  } catch (err) {
    console.err('抓取失败', err)
  }
}

main()