import $script from 'scriptjs'

$script('http://res.wx.qq.com/open/js/jweixin-1.0.0.js', 'wx')

const config = (confs = window.WD_CONFS.wx_confs) => {
  return new Promise(resolve => {
    $script.ready('wx', () => {
      const wx = window.wx
      wx.config(confs)
      wx.ready(() => {
        resolve(wx)
      })
    })
  })
}

const share = (opts = {}) => {
  const wx = window.wx
  return new Promise((resolve, reject) => {
    wx.onMenuShareTimeline({
      title: opts.title, // 分享标题
      link: opts.link, // 分享链接
      imgUrl: opts.imgUrl, // 分享图标
      success () {
        // 用户确认分享后执行的回调函数
        resolve(true)
      },
      cancel () {
        // 用户取消分享后执行的回调函数
        resolve(false)
      },
      fail () {
        reject()
      }
    })

    wx.onMenuShareAppMessage({
      title: opts.title, // 分享标题
      desc: opts.desc, // 分享描述
      link: opts.link, // 分享链接
      imgUrl: opts.imgUrl, // 分享图标
      type: opts.type, // 分享类型,music、video或link，不填默认为link
      dataUrl: opts.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
      success () {
        // 用户确认分享后执行的回调函数
        resolve(true)
      },
      cancel () {
        // 用户取消分享后执行的回调函数
        resolve(false)
      },
      fail () {
        reject()
      }
    })

    wx.onMenuShareQQ({
      title: opts.title, // 分享标题
      desc: opts.desc, // 分享描述
      link: opts.link, // 分享链接
      imgUrl: opts.imgUrl, // 分享图标
      success () {
        // 用户确认分享后执行的回调函数
        resolve(true)
      },
      cancel () {
        // 用户取消分享后执行的回调函数
        resolve(false)
      },
      fail () {
        reject()
      }
    })

    wx.onMenuShareQZone({
      title: opts.title, // 分享标题
      desc: opts.desc, // 分享描述
      link: opts.link, // 分享链接
      imgUrl: opts.imgUrl, // 分享图标
      success () {
        // 用户确认分享后执行的回调函数
        resolve(true)
      },
      cancel () {
        // 用户取消分享后执行的回调函数
        resolve(false)
      },
      fail () {
        reject()
      }
    })
  })
}

export default {
  config,
  share
}

