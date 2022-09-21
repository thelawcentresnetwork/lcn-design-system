import { chakra } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

const ChakraAwesome = chakra(FontAwesomeIcon)

const faLCNLogo = {
  prefix: 'fak',
  iconName: 'lcnlogo',
  icon: [
    600,
    602,
    [],
    null,
    'M3250,2013V1658c95.24-1.95,166.6-36.12,228-73,157.34-94.49,264.03-217.44,322-412,24.5-82.23,33.11-213.6,10-306-32.57-130.24-86.54-222.015-158-311-102.08-127.112-385.58-249.376-631-188-110.51,27.636-196.32,69.841-273,130-94.94,74.486-154.3,191.577-195,320q-19.995,70.493-40,141H2162c-2.79-151.289,36.54-267.608,82-371,115.57-262.851,351.81-466.4,641-556,45.84-14.2,95.05-23.635,146-32h111c85.7-.01,172.12-1.785,239,15,207.34,52.039,352.91,147.355,495,262,27.72,22.362,52.22,53.621,74,82,103.41,134.728,182.25,293.025,217,497v330a963.833,963.833,0,0,1-30,124c-92.33,294.15-313.48,533.74-592,643C3461.19,1985.88,3362.53,2010.22,3250,2013ZM1662,959c-3.36-83.3-32.72-162.1-60-225-76.06-175.4-210.47-298.058-403-357-71.25-21.813-180.11-37.055-270-20-42.8,8.12-83.532,14.877-122,27-99.615,31.392-177.751,80.982-250,139-29.467,23.663-52.9,56.854-75,88C380.857,753.568,310.89,971.372,382,1197c56.711,179.94,173.02,301.64,322,390,60.653,35.97,129.672,67.39,222,71q2,177.48,4,355c-140.247,2.79-252.153-42.19-349-85-267.865-118.4-470.591-368.34-560-667C-2.311,1183.13.014,1086.42,0,983c-0.006-45.2-4.579-99.136,4-138C42.332,671.342,105.81,531.774,193,408c30.424-43.189,65.294-82.371,98-123,36.208-44.98,90.229-80.552,139-113C554.77,88.988,680.909,48.621,857,15c48.345-9.231,143.96-20.425,201-11,47.3,7.815,91.04,3.322,134,12,80.6,16.282,154.42,34.318,222,63,260.71,110.645,469.27,337.5,558,620,16.23,51.662,16.67,111,28,170q8.505,45,17,90H1662Zm0,145h355v909H1070V1662h592V1104Zm500,0h351v558h592v351H2162V1104ZM930,2158q-2,175.485-4,351c-75.664.37-175.63,46.1-226,76-159.409,94.62-268.622,230.07-328,425-26.206,86.03-37.782,218-13,316,27.8,109.91,75.585,185.77,136,261,22.592,28.13,54.031,52.13,83,74,115.658,87.31,315.43,193.27,534,149,44.78-9.07,87.27-18.6,126-34,213.53-84.88,399.16-296.12,424-568h355q-8.505,52.5-17,105Q1990,3378,1980,3443q-15.495,43.995-31,88c-95.77,233.12-265.59,437.6-493,538-53.35,23.55-107.3,40.96-168,59-107.25,31.88-288.237,52.04-422,28-71.514-12.85-138.063-23.14-201-43-96.1-30.33-183.6-73.24-258-126q-39.5-32.49-79-65c-47.5-38.24-90.122-103.39-126-154C106.364,3633.1,35.853,3487.4,0,3290V3015c9.043-49.48,17.893-97.25,32-142,90.749-287.86,278.634-497.08,530-625C662.537,2196.84,779.338,2157.82,930,2158Zm140,0h947v909H1662V2509H1070V2158Zm1092,0h943v351H2513v558H2162V2158Zm1088,0c149.26-2.84,264.91,37.92,363,88,259.67,132.57,461.82,366.85,541,680,14.71,58.16,12.99,133.47,13,208,0.01,97.44,1.22,193.78-18,269-34.65,135.64-84.56,254.99-155,355-22.16,31.46-48.16,59.39-72,89-38.07,47.29-96.07,84.58-146,120-114.52,81.24-240.35,147.86-397,188-41.78,10.7-85.58,14.16-131,22l-63,3c-45.21,7.19-126.33-1.03-166-9-58.51-11.75-115.85-21.13-167-41-224.14-87.08-390.77-215.01-519-397-26.25-37.25-45.36-77.43-69-118-59.37-101.87-102.15-248.24-102-407q177.48,1.995,355,4c-0.87,94.63,27.48,174.34,63,235,97.22,166.04,203.94,279.45,406,341,88.42,26.93,223.09,37,323,12,152.74-38.22,234.74-96.19,339-180,20.75-16.68,38.73-40.76,55-62,101.71-132.82,168.6-336.08,100-556-60.97-195.43-175.22-327.18-337-422-52.67-30.87-139.51-67.88-216-71V2158Z',
  ],
}

const faLCNPetal = {
  prefix: 'fak',
  iconName: 'lcnpetal',
  icon: [
    542,
    532,
    [],
    null,
    'M297,520V434c67.636-9.232,112.479-50.545,134-106,24.657-63.538-2.9-142.764-40-173-18.533-15.1-37.93-29.379-63-38C216.31,78.592,123.156,168.111,115,260H30C27.954,121.148,180.589-15.525,339,31c43.864,12.883,75.922,33,107,58,56.822,45.7,104.519,164.829,67,264C480.129,439.886,408.847,513.312,297,520ZM29,297h86V434H260v86L29,519V297Z',
  ],
}

library.add(faLCNLogo, faLCNPetal)

export default ChakraAwesome
