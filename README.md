# Google One Quantumult X Rewrite

将 Google One 的指定页面响应中的套餐 SKU 字符串改写为另一字符串的 Quantumult X 脚本。

## 当前规则（2026-11-22 更新）

**URL 匹配表达式：**

`^https://one\.google\.com/ai\?.*$`

**响应体中的 SKU 替换：**

- 匹配正则：`g1\.ios\.30tb\.ai\.pro\.m`
- 替换值：`g1.ai.ultra.3months_ip_90p.acq`

原来 `30tb.ai.pro.m` → `30tb.m` 以及 `20tb.m.v2` → `20tb.m` 的两条规则已经移除，避免干扰完整 SKU 的替换。

## 安装

1. 将 [google-one.conf](google-one.conf) 的规则行加入现有 Quantumult X 配置中对应的 `[rewrite_local]` 和 `[mitm]` 部分，勿重复创建区段。
2. 在 Quantumult X 开启重写、MITM，并安装、信任 HTTPS 解密证书。
3. 在浏览器加载带有查询参数的 `https://one.google.com/ai?...` 页面。
4. 将日志等级设为 Debug 后，可以查找 `[GoogleOneQX] SKU replacements: N`，确认是否发生替换。

脚本 Raw 地址：

`https://raw.githubusercontent.com/sumuen/googleoneqx/main/scripts/google-one.js`

配置 Raw 地址：

`https://raw.githubusercontent.com/sumuen/googleoneqx/main/google-one.conf`

## 诊断

如果没有日志或者页面效果未变化，可以临时将脚本路径换成只读的 [scripts/diagnose.js](scripts/diagnose.js)，检查该响应里是否包含来源 SKU。诊断脚本不会修改任何响应内容。

## 限制与安全说明

- 这是客户端的 HTTP 响应文本替换，**不能**证明 Google 或 Apple 授予了对应优惠资格，也不能控制 App Store 的结算价格。
- 请以 Apple 购买确认弹窗显示的价格与续费条款为准，若不是你预期的金额，请取消购买。
- 规则只匹配 `/ai` 且带有 `?` 查询字符串的 URL；Google 可能改变路径或页面结构。
- HTTPS 解密和响应改写只应在你信任的设备与配置中使用，不要公开响应正文、Cookie 或完整的账号参数。
