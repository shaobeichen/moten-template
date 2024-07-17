/**
 * 组件开发预览脚本
 *
 * 原理解析：
 * pnpm ui 和 pnpm editor 会同时监听文件，
 * 不能直接使用 pnpm ui && pnpm editor，
 * 否则 pnpm ui会阻塞 pnpm editor，
 * 需要使用 exec 先执行 pnpm ui，监听它的输出，
 * 如果输出了 built in 表示编译结束，就执行 pnpm editor，
 * pnpm ui 会监听文件变化，然后重新编译，
 * 重新编译后也会输出 built in，所以第一次执行 pnpm editor 即可。
 * windows上是\u001b[36mbuilt in，mac上是built in。
 */

import { exec } from 'child_process'

function ex(cmd, callback) {}

function main() {}

main()
