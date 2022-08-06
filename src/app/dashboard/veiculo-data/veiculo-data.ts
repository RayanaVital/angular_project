export interface VeiculoData {
  id: number
  vin: string
  odometer: string
  tirePressure: string
  status: string
  batteryStatus: string
  fuelLevel: string
  lat: string
  long: string
}

export interface VeiculosDatas extends Array<VeiculoData> {}

export interface VeiculosDatasAPI {
  vehicleData: VeiculosDatas;
}
