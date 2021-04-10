import ReportData from '../data/ReportData';
import {IMonitorConfig} from '../typings/types'

export const config: IMonitorConfig = {
  // Metrics
  reportData: new ReportData({ logUrl: 'hole' }),
  // 是否资源数据
  isResourceTiming: false,
  isElementTiming: false,
  // 最大请求时间
  maxTime: 15000,
}