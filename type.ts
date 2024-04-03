export type Root = Root2[]

export interface Root2 {
  Nazwa: string
  NazwaUrl: string
  ZdjeciaDuze: ZdjeciaDuze
  ZdjeciaMale: ZdjeciaMale
  IloscBloczkow: number
  BanerUrl: string
  WszystkieUrl: string
  Bloczki: Bloczki[]
  CzyAktywne: boolean
}

export interface ZdjeciaDuze {
  ZdjecieStandard: string
  ZdjecieWebp: string
  ZdjecieSvg: string
}

export interface ZdjeciaMale {
  ZdjecieStandard: string
  ZdjecieWebp: string
  ZdjecieSvg: string
}

export interface Bloczki {
  BloczekId: string
  BazoweInformacje: BazoweInformacje
  TerminWyjazdu: string
  Przystanki: Przystanki[]
  Wyzywienia: Wyzywienum[]
  Zdjecia: string[]
  Ocena: Ocena
  Cena: Cena
  CzyCenaZaOsobe: boolean
  Fiszki: Fiszki[]
  CzyLight: boolean
}

export interface BazoweInformacje {
  ImprezaID: number
  HotelID: number
  LiczbaDni: number
  LiczbaDniPrzedluzenie: number
  KluczProduktHotel: string
  KodProduktu: string
  TypWycieczki: string
  Lokalizacje: string
  Panstwa: string[]
  Regiony: string[]
  GwiazdkiHotelu: number
  NazwaHoteluWWW?: string
  OfertaNazwa: string
  OfertaURL: string
  OfertaURLDlaGoogle: string
  DatyUrodzenia: string[]
  LiczbaPokoi: number
  Params: string
}

export interface Przystanki {
  Nazwa: string
  Iata: string
  Miasto: string
  MiastoURL: string
  CzySamolot: boolean
  CzyDreamliner: boolean
}

export interface Wyzywienum {
  Nazwa: string
  URL: string
}

export interface Ocena {
  Ocena?: number
  IloscOcen?: number
  CzyPokazywac: boolean
}

export interface Cena {
  CenaAktualna: number
  CenaPrzedPromocja: number
  CenaOmnibus?: number
  CenyZaPokoj: CenyZaPokoj[]
}

export interface CenyZaPokoj {
  Pokoj: number
  Cena: number
}

export interface Fiszki {
  Nazwa: string
  Opis: string
}
