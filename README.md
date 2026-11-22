# Google One Quantumult X Rewrite

将截图中的 Shadowrocket「HTTPS 解密 + 正文重写」配置转换为 Quantumult X 响应脚本。

## 原截图规则

目标 URL：`^https://one.google.com/ai\?.*$`

- `30tb\.ai\.pro\.m` → `30tb.m`
- `20tb\.m\.v2` → `20tb.m`

> 截图分辨率有限，这两条匹配文字是根据截图放大后识别的，请和原始文本核对。它们针对的是方案标识符，并非日期。

## 使用方式

1. 复制 [google-one.conf](google-one.conf) 中的 `[rewrite_local]` 和 `[mitm]` 配置到 Quantumult X 配置文件对应的节。若已存在相应节，请只合并规则行，不要重复创建节。
2. 在 Quantumult X 中启用 MITM/HTTPS 解密，安装并信任 Quantumult X 的证书。
3. 确保 `one.google.com` 在 MITM 主机名列表内，并开启重写规则。
4. 重新加载 [Google One AI 页面](https://one.google.com/ai) 并检查是否命中脚本。

**脚本 Raw 地址：**

```text
https://raw.githubusercontent.com/sumuen/googleoneqx/main/scripts/google-one.js
```

**规则片段 Raw 地址：**

```text
https://raw.githubusercontent.com/sumuen/googleoneqx/main/google-one.conf
```

## 注意

- 本脚本只改变所匹配 HTTP 响应体中的特定字符串，**不能**开通、延长、共享或解锁任何 Google One / Google AI Ultra / Colab 付费权益。
- 只有页面请求匹配 `https://one.google.com/ai?... ` 且内容以文本响应方式经过 Quantumult X 时才会生效。Google 可能调整网站路径、页面结构或计划标识符。
- HTTPS 解密会在本机代理中处理访问内容。请只信任自己配置的代理和证书，避免在不受信任的配置中启用宽泛的 MITM 域名。
- 如果实际打开的 URL 没有查询参数，请参考规则中的可选参数匹配写法；当前配置已同时支持有无查询参数。
