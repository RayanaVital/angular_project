export interface Veiculo{
  id: number | string
  vehicle: string
  volumetotal: number | string
  connected: number | string
  softwareUpdates: number | string
}

export interface Veiculos extends Array<Veiculo> {}

export interface VeiculosAPI {
  vehicles: Veiculos;
}

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
