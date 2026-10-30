
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model OptionCategory
 * 
 */
export type OptionCategory = $Result.DefaultSelection<Prisma.$OptionCategoryPayload>
/**
 * Model Option
 * 
 */
export type Option = $Result.DefaultSelection<Prisma.$OptionPayload>
/**
 * Model VehicleConfiguration
 * 
 */
export type VehicleConfiguration = $Result.DefaultSelection<Prisma.$VehicleConfigurationPayload>
/**
 * Model VehicleConfigurationOption
 * 
 */
export type VehicleConfigurationOption = $Result.DefaultSelection<Prisma.$VehicleConfigurationOptionPayload>
/**
 * Model VIPBooking
 * 
 */
export type VIPBooking = $Result.DefaultSelection<Prisma.$VIPBookingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VehicleCategory: {
  HYPERCAR: 'HYPERCAR',
  PERFORMANCE_SUV: 'PERFORMANCE_SUV',
  PURE_SPORT: 'PURE_SPORT',
  ELECTRIC_PRECISION: 'ELECTRIC_PRECISION'
};

export type VehicleCategory = (typeof VehicleCategory)[keyof typeof VehicleCategory]


export const ContactMethod: {
  WHATSAPP: 'WHATSAPP',
  PHONE: 'PHONE',
  EMAIL: 'EMAIL'
};

export type ContactMethod = (typeof ContactMethod)[keyof typeof ContactMethod]


export const AppointmentType: {
  VIP_TEST_DRIVE: 'VIP_TEST_DRIVE',
  TRADE_IN_EVALUATION: 'TRADE_IN_EVALUATION',
  FINANCIAL_CONSULTING: 'FINANCIAL_CONSULTING'
};

export type AppointmentType = (typeof AppointmentType)[keyof typeof AppointmentType]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type VehicleCategory = $Enums.VehicleCategory

export const VehicleCategory: typeof $Enums.VehicleCategory

export type ContactMethod = $Enums.ContactMethod

export const ContactMethod: typeof $Enums.ContactMethod

export type AppointmentType = $Enums.AppointmentType

export const AppointmentType: typeof $Enums.AppointmentType

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Vehicles
 * const vehicles = await prisma.vehicle.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Vehicles
   * const vehicles = await prisma.vehicle.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.optionCategory`: Exposes CRUD operations for the **OptionCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OptionCategories
    * const optionCategories = await prisma.optionCategory.findMany()
    * ```
    */
  get optionCategory(): Prisma.OptionCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.option`: Exposes CRUD operations for the **Option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.OptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleConfiguration`: Exposes CRUD operations for the **VehicleConfiguration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleConfigurations
    * const vehicleConfigurations = await prisma.vehicleConfiguration.findMany()
    * ```
    */
  get vehicleConfiguration(): Prisma.VehicleConfigurationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleConfigurationOption`: Exposes CRUD operations for the **VehicleConfigurationOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleConfigurationOptions
    * const vehicleConfigurationOptions = await prisma.vehicleConfigurationOption.findMany()
    * ```
    */
  get vehicleConfigurationOption(): Prisma.VehicleConfigurationOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vIPBooking`: Exposes CRUD operations for the **VIPBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VIPBookings
    * const vIPBookings = await prisma.vIPBooking.findMany()
    * ```
    */
  get vIPBooking(): Prisma.VIPBookingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Vehicle: 'Vehicle',
    OptionCategory: 'OptionCategory',
    Option: 'Option',
    VehicleConfiguration: 'VehicleConfiguration',
    VehicleConfigurationOption: 'VehicleConfigurationOption',
    VIPBooking: 'VIPBooking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "vehicle" | "optionCategory" | "option" | "vehicleConfiguration" | "vehicleConfigurationOption" | "vIPBooking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      OptionCategory: {
        payload: Prisma.$OptionCategoryPayload<ExtArgs>
        fields: Prisma.OptionCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionCategoryPayload>
          }
          findFirst: {
            args: Prisma.OptionCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionCategoryPayload>
          }
          findMany: {
            args: Prisma.OptionCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionCategoryPayload>[]
          }
          create: {
            args: Prisma.OptionCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionCategoryPayload>
          }
          createMany: {
            args: Prisma.OptionCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionCategoryPayload>[]
          }
          delete: {
            args: Prisma.OptionCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionCategoryPayload>
          }
          update: {
            args: Prisma.OptionCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionCategoryPayload>
          }
          deleteMany: {
            args: Prisma.OptionCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptionCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionCategoryPayload>[]
          }
          upsert: {
            args: Prisma.OptionCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionCategoryPayload>
          }
          aggregate: {
            args: Prisma.OptionCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOptionCategory>
          }
          groupBy: {
            args: Prisma.OptionCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<OptionCategoryCountAggregateOutputType> | number
          }
        }
      }
      Option: {
        payload: Prisma.$OptionPayload<ExtArgs>
        fields: Prisma.OptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findFirst: {
            args: Prisma.OptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findMany: {
            args: Prisma.OptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          create: {
            args: Prisma.OptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          createMany: {
            args: Prisma.OptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          delete: {
            args: Prisma.OptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          update: {
            args: Prisma.OptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          deleteMany: {
            args: Prisma.OptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          upsert: {
            args: Prisma.OptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.OptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionCountArgs<ExtArgs>
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
          }
        }
      }
      VehicleConfiguration: {
        payload: Prisma.$VehicleConfigurationPayload<ExtArgs>
        fields: Prisma.VehicleConfigurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleConfigurationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleConfigurationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationPayload>
          }
          findFirst: {
            args: Prisma.VehicleConfigurationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleConfigurationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationPayload>
          }
          findMany: {
            args: Prisma.VehicleConfigurationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationPayload>[]
          }
          create: {
            args: Prisma.VehicleConfigurationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationPayload>
          }
          createMany: {
            args: Prisma.VehicleConfigurationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleConfigurationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationPayload>[]
          }
          delete: {
            args: Prisma.VehicleConfigurationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationPayload>
          }
          update: {
            args: Prisma.VehicleConfigurationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationPayload>
          }
          deleteMany: {
            args: Prisma.VehicleConfigurationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleConfigurationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleConfigurationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationPayload>[]
          }
          upsert: {
            args: Prisma.VehicleConfigurationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationPayload>
          }
          aggregate: {
            args: Prisma.VehicleConfigurationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleConfiguration>
          }
          groupBy: {
            args: Prisma.VehicleConfigurationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleConfigurationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleConfigurationCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleConfigurationCountAggregateOutputType> | number
          }
        }
      }
      VehicleConfigurationOption: {
        payload: Prisma.$VehicleConfigurationOptionPayload<ExtArgs>
        fields: Prisma.VehicleConfigurationOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleConfigurationOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleConfigurationOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationOptionPayload>
          }
          findFirst: {
            args: Prisma.VehicleConfigurationOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleConfigurationOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationOptionPayload>
          }
          findMany: {
            args: Prisma.VehicleConfigurationOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationOptionPayload>[]
          }
          create: {
            args: Prisma.VehicleConfigurationOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationOptionPayload>
          }
          createMany: {
            args: Prisma.VehicleConfigurationOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleConfigurationOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationOptionPayload>[]
          }
          delete: {
            args: Prisma.VehicleConfigurationOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationOptionPayload>
          }
          update: {
            args: Prisma.VehicleConfigurationOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationOptionPayload>
          }
          deleteMany: {
            args: Prisma.VehicleConfigurationOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleConfigurationOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleConfigurationOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationOptionPayload>[]
          }
          upsert: {
            args: Prisma.VehicleConfigurationOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleConfigurationOptionPayload>
          }
          aggregate: {
            args: Prisma.VehicleConfigurationOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleConfigurationOption>
          }
          groupBy: {
            args: Prisma.VehicleConfigurationOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleConfigurationOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleConfigurationOptionCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleConfigurationOptionCountAggregateOutputType> | number
          }
        }
      }
      VIPBooking: {
        payload: Prisma.$VIPBookingPayload<ExtArgs>
        fields: Prisma.VIPBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VIPBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VIPBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VIPBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VIPBookingPayload>
          }
          findFirst: {
            args: Prisma.VIPBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VIPBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VIPBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VIPBookingPayload>
          }
          findMany: {
            args: Prisma.VIPBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VIPBookingPayload>[]
          }
          create: {
            args: Prisma.VIPBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VIPBookingPayload>
          }
          createMany: {
            args: Prisma.VIPBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VIPBookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VIPBookingPayload>[]
          }
          delete: {
            args: Prisma.VIPBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VIPBookingPayload>
          }
          update: {
            args: Prisma.VIPBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VIPBookingPayload>
          }
          deleteMany: {
            args: Prisma.VIPBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VIPBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VIPBookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VIPBookingPayload>[]
          }
          upsert: {
            args: Prisma.VIPBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VIPBookingPayload>
          }
          aggregate: {
            args: Prisma.VIPBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVIPBooking>
          }
          groupBy: {
            args: Prisma.VIPBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<VIPBookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.VIPBookingCountArgs<ExtArgs>
            result: $Utils.Optional<VIPBookingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    vehicle?: VehicleOmit
    optionCategory?: OptionCategoryOmit
    option?: OptionOmit
    vehicleConfiguration?: VehicleConfigurationOmit
    vehicleConfigurationOption?: VehicleConfigurationOptionOmit
    vIPBooking?: VIPBookingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    configurations: number
    bookings: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configurations?: boolean | VehicleCountOutputTypeCountConfigurationsArgs
    bookings?: boolean | VehicleCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountConfigurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleConfigurationWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VIPBookingWhereInput
  }


  /**
   * Count Type OptionCategoryCountOutputType
   */

  export type OptionCategoryCountOutputType = {
    options: number
  }

  export type OptionCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | OptionCategoryCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * OptionCategoryCountOutputType without action
   */
  export type OptionCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCategoryCountOutputType
     */
    select?: OptionCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OptionCategoryCountOutputType without action
   */
  export type OptionCategoryCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
  }


  /**
   * Count Type OptionCountOutputType
   */

  export type OptionCountOutputType = {
    configurations: number
  }

  export type OptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configurations?: boolean | OptionCountOutputTypeCountConfigurationsArgs
  }

  // Custom InputTypes
  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCountOutputType
     */
    select?: OptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeCountConfigurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleConfigurationOptionWhereInput
  }


  /**
   * Count Type VehicleConfigurationCountOutputType
   */

  export type VehicleConfigurationCountOutputType = {
    options: number
    bookings: number
  }

  export type VehicleConfigurationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | VehicleConfigurationCountOutputTypeCountOptionsArgs
    bookings?: boolean | VehicleConfigurationCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * VehicleConfigurationCountOutputType without action
   */
  export type VehicleConfigurationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationCountOutputType
     */
    select?: VehicleConfigurationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleConfigurationCountOutputType without action
   */
  export type VehicleConfigurationCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleConfigurationOptionWhereInput
  }

  /**
   * VehicleConfigurationCountOutputType without action
   */
  export type VehicleConfigurationCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VIPBookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    horsepower: number | null
    torqueNm: number | null
    zeroToHundred: number | null
    topSpeedKmh: number | null
    rangeKm: number | null
    basePriceChf: number | null
  }

  export type VehicleSumAggregateOutputType = {
    horsepower: number | null
    torqueNm: number | null
    zeroToHundred: number | null
    topSpeedKmh: number | null
    rangeKm: number | null
    basePriceChf: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    slug: string | null
    brand: string | null
    model: string | null
    category: $Enums.VehicleCategory | null
    horsepower: number | null
    torqueNm: number | null
    zeroToHundred: number | null
    topSpeedKmh: number | null
    rangeKm: number | null
    consumption: string | null
    basePriceChf: number | null
    available: boolean | null
    heroImage: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    brand: string | null
    model: string | null
    category: $Enums.VehicleCategory | null
    horsepower: number | null
    torqueNm: number | null
    zeroToHundred: number | null
    topSpeedKmh: number | null
    rangeKm: number | null
    consumption: string | null
    basePriceChf: number | null
    available: boolean | null
    heroImage: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    slug: number
    brand: number
    model: number
    category: number
    horsepower: number
    torqueNm: number
    zeroToHundred: number
    topSpeedKmh: number
    rangeKm: number
    consumption: number
    basePriceChf: number
    available: number
    heroImage: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    horsepower?: true
    torqueNm?: true
    zeroToHundred?: true
    topSpeedKmh?: true
    rangeKm?: true
    basePriceChf?: true
  }

  export type VehicleSumAggregateInputType = {
    horsepower?: true
    torqueNm?: true
    zeroToHundred?: true
    topSpeedKmh?: true
    rangeKm?: true
    basePriceChf?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    slug?: true
    brand?: true
    model?: true
    category?: true
    horsepower?: true
    torqueNm?: true
    zeroToHundred?: true
    topSpeedKmh?: true
    rangeKm?: true
    consumption?: true
    basePriceChf?: true
    available?: true
    heroImage?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    slug?: true
    brand?: true
    model?: true
    category?: true
    horsepower?: true
    torqueNm?: true
    zeroToHundred?: true
    topSpeedKmh?: true
    rangeKm?: true
    consumption?: true
    basePriceChf?: true
    available?: true
    heroImage?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    slug?: true
    brand?: true
    model?: true
    category?: true
    horsepower?: true
    torqueNm?: true
    zeroToHundred?: true
    topSpeedKmh?: true
    rangeKm?: true
    consumption?: true
    basePriceChf?: true
    available?: true
    heroImage?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    slug: string
    brand: string
    model: string
    category: $Enums.VehicleCategory
    horsepower: number
    torqueNm: number
    zeroToHundred: number
    topSpeedKmh: number
    rangeKm: number | null
    consumption: string | null
    basePriceChf: number
    available: boolean
    heroImage: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    brand?: boolean
    model?: boolean
    category?: boolean
    horsepower?: boolean
    torqueNm?: boolean
    zeroToHundred?: boolean
    topSpeedKmh?: boolean
    rangeKm?: boolean
    consumption?: boolean
    basePriceChf?: boolean
    available?: boolean
    heroImage?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    configurations?: boolean | Vehicle$configurationsArgs<ExtArgs>
    bookings?: boolean | Vehicle$bookingsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    brand?: boolean
    model?: boolean
    category?: boolean
    horsepower?: boolean
    torqueNm?: boolean
    zeroToHundred?: boolean
    topSpeedKmh?: boolean
    rangeKm?: boolean
    consumption?: boolean
    basePriceChf?: boolean
    available?: boolean
    heroImage?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    brand?: boolean
    model?: boolean
    category?: boolean
    horsepower?: boolean
    torqueNm?: boolean
    zeroToHundred?: boolean
    topSpeedKmh?: boolean
    rangeKm?: boolean
    consumption?: boolean
    basePriceChf?: boolean
    available?: boolean
    heroImage?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    slug?: boolean
    brand?: boolean
    model?: boolean
    category?: boolean
    horsepower?: boolean
    torqueNm?: boolean
    zeroToHundred?: boolean
    topSpeedKmh?: boolean
    rangeKm?: boolean
    consumption?: boolean
    basePriceChf?: boolean
    available?: boolean
    heroImage?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "brand" | "model" | "category" | "horsepower" | "torqueNm" | "zeroToHundred" | "topSpeedKmh" | "rangeKm" | "consumption" | "basePriceChf" | "available" | "heroImage" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configurations?: boolean | Vehicle$configurationsArgs<ExtArgs>
    bookings?: boolean | Vehicle$bookingsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      configurations: Prisma.$VehicleConfigurationPayload<ExtArgs>[]
      bookings: Prisma.$VIPBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      brand: string
      model: string
      category: $Enums.VehicleCategory
      horsepower: number
      torqueNm: number
      zeroToHundred: number
      topSpeedKmh: number
      rangeKm: number | null
      consumption: string | null
      basePriceChf: number
      available: boolean
      heroImage: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    configurations<T extends Vehicle$configurationsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$configurationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Vehicle$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VIPBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly slug: FieldRef<"Vehicle", 'String'>
    readonly brand: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly category: FieldRef<"Vehicle", 'VehicleCategory'>
    readonly horsepower: FieldRef<"Vehicle", 'Int'>
    readonly torqueNm: FieldRef<"Vehicle", 'Int'>
    readonly zeroToHundred: FieldRef<"Vehicle", 'Float'>
    readonly topSpeedKmh: FieldRef<"Vehicle", 'Int'>
    readonly rangeKm: FieldRef<"Vehicle", 'Int'>
    readonly consumption: FieldRef<"Vehicle", 'String'>
    readonly basePriceChf: FieldRef<"Vehicle", 'Int'>
    readonly available: FieldRef<"Vehicle", 'Boolean'>
    readonly heroImage: FieldRef<"Vehicle", 'String'>
    readonly description: FieldRef<"Vehicle", 'String'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.configurations
   */
  export type Vehicle$configurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfiguration
     */
    select?: VehicleConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfiguration
     */
    omit?: VehicleConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationInclude<ExtArgs> | null
    where?: VehicleConfigurationWhereInput
    orderBy?: VehicleConfigurationOrderByWithRelationInput | VehicleConfigurationOrderByWithRelationInput[]
    cursor?: VehicleConfigurationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleConfigurationScalarFieldEnum | VehicleConfigurationScalarFieldEnum[]
  }

  /**
   * Vehicle.bookings
   */
  export type Vehicle$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VIPBooking
     */
    select?: VIPBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VIPBooking
     */
    omit?: VIPBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VIPBookingInclude<ExtArgs> | null
    where?: VIPBookingWhereInput
    orderBy?: VIPBookingOrderByWithRelationInput | VIPBookingOrderByWithRelationInput[]
    cursor?: VIPBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VIPBookingScalarFieldEnum | VIPBookingScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model OptionCategory
   */

  export type AggregateOptionCategory = {
    _count: OptionCategoryCountAggregateOutputType | null
    _min: OptionCategoryMinAggregateOutputType | null
    _max: OptionCategoryMaxAggregateOutputType | null
  }

  export type OptionCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type OptionCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type OptionCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    _all: number
  }


  export type OptionCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type OptionCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type OptionCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type OptionCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OptionCategory to aggregate.
     */
    where?: OptionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionCategories to fetch.
     */
    orderBy?: OptionCategoryOrderByWithRelationInput | OptionCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OptionCategories
    **/
    _count?: true | OptionCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionCategoryMaxAggregateInputType
  }

  export type GetOptionCategoryAggregateType<T extends OptionCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateOptionCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOptionCategory[P]>
      : GetScalarType<T[P], AggregateOptionCategory[P]>
  }




  export type OptionCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionCategoryWhereInput
    orderBy?: OptionCategoryOrderByWithAggregationInput | OptionCategoryOrderByWithAggregationInput[]
    by: OptionCategoryScalarFieldEnum[] | OptionCategoryScalarFieldEnum
    having?: OptionCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCategoryCountAggregateInputType | true
    _min?: OptionCategoryMinAggregateInputType
    _max?: OptionCategoryMaxAggregateInputType
  }

  export type OptionCategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    _count: OptionCategoryCountAggregateOutputType | null
    _min: OptionCategoryMinAggregateOutputType | null
    _max: OptionCategoryMaxAggregateOutputType | null
  }

  type GetOptionCategoryGroupByPayload<T extends OptionCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], OptionCategoryGroupByOutputType[P]>
        }
      >
    >


  export type OptionCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    options?: boolean | OptionCategory$optionsArgs<ExtArgs>
    _count?: boolean | OptionCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["optionCategory"]>

  export type OptionCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["optionCategory"]>

  export type OptionCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["optionCategory"]>

  export type OptionCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
  }

  export type OptionCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug", ExtArgs["result"]["optionCategory"]>
  export type OptionCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | OptionCategory$optionsArgs<ExtArgs>
    _count?: boolean | OptionCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OptionCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OptionCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OptionCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OptionCategory"
    objects: {
      options: Prisma.$OptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
    }, ExtArgs["result"]["optionCategory"]>
    composites: {}
  }

  type OptionCategoryGetPayload<S extends boolean | null | undefined | OptionCategoryDefaultArgs> = $Result.GetResult<Prisma.$OptionCategoryPayload, S>

  type OptionCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionCategoryCountAggregateInputType | true
    }

  export interface OptionCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OptionCategory'], meta: { name: 'OptionCategory' } }
    /**
     * Find zero or one OptionCategory that matches the filter.
     * @param {OptionCategoryFindUniqueArgs} args - Arguments to find a OptionCategory
     * @example
     * // Get one OptionCategory
     * const optionCategory = await prisma.optionCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionCategoryFindUniqueArgs>(args: SelectSubset<T, OptionCategoryFindUniqueArgs<ExtArgs>>): Prisma__OptionCategoryClient<$Result.GetResult<Prisma.$OptionCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OptionCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionCategoryFindUniqueOrThrowArgs} args - Arguments to find a OptionCategory
     * @example
     * // Get one OptionCategory
     * const optionCategory = await prisma.optionCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionCategoryClient<$Result.GetResult<Prisma.$OptionCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OptionCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCategoryFindFirstArgs} args - Arguments to find a OptionCategory
     * @example
     * // Get one OptionCategory
     * const optionCategory = await prisma.optionCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionCategoryFindFirstArgs>(args?: SelectSubset<T, OptionCategoryFindFirstArgs<ExtArgs>>): Prisma__OptionCategoryClient<$Result.GetResult<Prisma.$OptionCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OptionCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCategoryFindFirstOrThrowArgs} args - Arguments to find a OptionCategory
     * @example
     * // Get one OptionCategory
     * const optionCategory = await prisma.optionCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionCategoryClient<$Result.GetResult<Prisma.$OptionCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OptionCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OptionCategories
     * const optionCategories = await prisma.optionCategory.findMany()
     * 
     * // Get first 10 OptionCategories
     * const optionCategories = await prisma.optionCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionCategoryWithIdOnly = await prisma.optionCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionCategoryFindManyArgs>(args?: SelectSubset<T, OptionCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OptionCategory.
     * @param {OptionCategoryCreateArgs} args - Arguments to create a OptionCategory.
     * @example
     * // Create one OptionCategory
     * const OptionCategory = await prisma.optionCategory.create({
     *   data: {
     *     // ... data to create a OptionCategory
     *   }
     * })
     * 
     */
    create<T extends OptionCategoryCreateArgs>(args: SelectSubset<T, OptionCategoryCreateArgs<ExtArgs>>): Prisma__OptionCategoryClient<$Result.GetResult<Prisma.$OptionCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OptionCategories.
     * @param {OptionCategoryCreateManyArgs} args - Arguments to create many OptionCategories.
     * @example
     * // Create many OptionCategories
     * const optionCategory = await prisma.optionCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionCategoryCreateManyArgs>(args?: SelectSubset<T, OptionCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OptionCategories and returns the data saved in the database.
     * @param {OptionCategoryCreateManyAndReturnArgs} args - Arguments to create many OptionCategories.
     * @example
     * // Create many OptionCategories
     * const optionCategory = await prisma.optionCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OptionCategories and only return the `id`
     * const optionCategoryWithIdOnly = await prisma.optionCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OptionCategory.
     * @param {OptionCategoryDeleteArgs} args - Arguments to delete one OptionCategory.
     * @example
     * // Delete one OptionCategory
     * const OptionCategory = await prisma.optionCategory.delete({
     *   where: {
     *     // ... filter to delete one OptionCategory
     *   }
     * })
     * 
     */
    delete<T extends OptionCategoryDeleteArgs>(args: SelectSubset<T, OptionCategoryDeleteArgs<ExtArgs>>): Prisma__OptionCategoryClient<$Result.GetResult<Prisma.$OptionCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OptionCategory.
     * @param {OptionCategoryUpdateArgs} args - Arguments to update one OptionCategory.
     * @example
     * // Update one OptionCategory
     * const optionCategory = await prisma.optionCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionCategoryUpdateArgs>(args: SelectSubset<T, OptionCategoryUpdateArgs<ExtArgs>>): Prisma__OptionCategoryClient<$Result.GetResult<Prisma.$OptionCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OptionCategories.
     * @param {OptionCategoryDeleteManyArgs} args - Arguments to filter OptionCategories to delete.
     * @example
     * // Delete a few OptionCategories
     * const { count } = await prisma.optionCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionCategoryDeleteManyArgs>(args?: SelectSubset<T, OptionCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OptionCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OptionCategories
     * const optionCategory = await prisma.optionCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionCategoryUpdateManyArgs>(args: SelectSubset<T, OptionCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OptionCategories and returns the data updated in the database.
     * @param {OptionCategoryUpdateManyAndReturnArgs} args - Arguments to update many OptionCategories.
     * @example
     * // Update many OptionCategories
     * const optionCategory = await prisma.optionCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OptionCategories and only return the `id`
     * const optionCategoryWithIdOnly = await prisma.optionCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OptionCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, OptionCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OptionCategory.
     * @param {OptionCategoryUpsertArgs} args - Arguments to update or create a OptionCategory.
     * @example
     * // Update or create a OptionCategory
     * const optionCategory = await prisma.optionCategory.upsert({
     *   create: {
     *     // ... data to create a OptionCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OptionCategory we want to update
     *   }
     * })
     */
    upsert<T extends OptionCategoryUpsertArgs>(args: SelectSubset<T, OptionCategoryUpsertArgs<ExtArgs>>): Prisma__OptionCategoryClient<$Result.GetResult<Prisma.$OptionCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OptionCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCategoryCountArgs} args - Arguments to filter OptionCategories to count.
     * @example
     * // Count the number of OptionCategories
     * const count = await prisma.optionCategory.count({
     *   where: {
     *     // ... the filter for the OptionCategories we want to count
     *   }
     * })
    **/
    count<T extends OptionCategoryCountArgs>(
      args?: Subset<T, OptionCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OptionCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OptionCategoryAggregateArgs>(args: Subset<T, OptionCategoryAggregateArgs>): Prisma.PrismaPromise<GetOptionCategoryAggregateType<T>>

    /**
     * Group by OptionCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OptionCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionCategoryGroupByArgs['orderBy'] }
        : { orderBy?: OptionCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OptionCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OptionCategory model
   */
  readonly fields: OptionCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OptionCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    options<T extends OptionCategory$optionsArgs<ExtArgs> = {}>(args?: Subset<T, OptionCategory$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OptionCategory model
   */
  interface OptionCategoryFieldRefs {
    readonly id: FieldRef<"OptionCategory", 'String'>
    readonly name: FieldRef<"OptionCategory", 'String'>
    readonly slug: FieldRef<"OptionCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OptionCategory findUnique
   */
  export type OptionCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCategory
     */
    select?: OptionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionCategory
     */
    omit?: OptionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OptionCategory to fetch.
     */
    where: OptionCategoryWhereUniqueInput
  }

  /**
   * OptionCategory findUniqueOrThrow
   */
  export type OptionCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCategory
     */
    select?: OptionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionCategory
     */
    omit?: OptionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OptionCategory to fetch.
     */
    where: OptionCategoryWhereUniqueInput
  }

  /**
   * OptionCategory findFirst
   */
  export type OptionCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCategory
     */
    select?: OptionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionCategory
     */
    omit?: OptionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OptionCategory to fetch.
     */
    where?: OptionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionCategories to fetch.
     */
    orderBy?: OptionCategoryOrderByWithRelationInput | OptionCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OptionCategories.
     */
    cursor?: OptionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptionCategories.
     */
    distinct?: OptionCategoryScalarFieldEnum | OptionCategoryScalarFieldEnum[]
  }

  /**
   * OptionCategory findFirstOrThrow
   */
  export type OptionCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCategory
     */
    select?: OptionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionCategory
     */
    omit?: OptionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OptionCategory to fetch.
     */
    where?: OptionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionCategories to fetch.
     */
    orderBy?: OptionCategoryOrderByWithRelationInput | OptionCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OptionCategories.
     */
    cursor?: OptionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptionCategories.
     */
    distinct?: OptionCategoryScalarFieldEnum | OptionCategoryScalarFieldEnum[]
  }

  /**
   * OptionCategory findMany
   */
  export type OptionCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCategory
     */
    select?: OptionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionCategory
     */
    omit?: OptionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OptionCategories to fetch.
     */
    where?: OptionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionCategories to fetch.
     */
    orderBy?: OptionCategoryOrderByWithRelationInput | OptionCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OptionCategories.
     */
    cursor?: OptionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptionCategories.
     */
    distinct?: OptionCategoryScalarFieldEnum | OptionCategoryScalarFieldEnum[]
  }

  /**
   * OptionCategory create
   */
  export type OptionCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCategory
     */
    select?: OptionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionCategory
     */
    omit?: OptionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a OptionCategory.
     */
    data: XOR<OptionCategoryCreateInput, OptionCategoryUncheckedCreateInput>
  }

  /**
   * OptionCategory createMany
   */
  export type OptionCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OptionCategories.
     */
    data: OptionCategoryCreateManyInput | OptionCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OptionCategory createManyAndReturn
   */
  export type OptionCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCategory
     */
    select?: OptionCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OptionCategory
     */
    omit?: OptionCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many OptionCategories.
     */
    data: OptionCategoryCreateManyInput | OptionCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OptionCategory update
   */
  export type OptionCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCategory
     */
    select?: OptionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionCategory
     */
    omit?: OptionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a OptionCategory.
     */
    data: XOR<OptionCategoryUpdateInput, OptionCategoryUncheckedUpdateInput>
    /**
     * Choose, which OptionCategory to update.
     */
    where: OptionCategoryWhereUniqueInput
  }

  /**
   * OptionCategory updateMany
   */
  export type OptionCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OptionCategories.
     */
    data: XOR<OptionCategoryUpdateManyMutationInput, OptionCategoryUncheckedUpdateManyInput>
    /**
     * Filter which OptionCategories to update
     */
    where?: OptionCategoryWhereInput
    /**
     * Limit how many OptionCategories to update.
     */
    limit?: number
  }

  /**
   * OptionCategory updateManyAndReturn
   */
  export type OptionCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCategory
     */
    select?: OptionCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OptionCategory
     */
    omit?: OptionCategoryOmit<ExtArgs> | null
    /**
     * The data used to update OptionCategories.
     */
    data: XOR<OptionCategoryUpdateManyMutationInput, OptionCategoryUncheckedUpdateManyInput>
    /**
     * Filter which OptionCategories to update
     */
    where?: OptionCategoryWhereInput
    /**
     * Limit how many OptionCategories to update.
     */
    limit?: number
  }

  /**
   * OptionCategory upsert
   */
  export type OptionCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCategory
     */
    select?: OptionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionCategory
     */
    omit?: OptionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the OptionCategory to update in case it exists.
     */
    where: OptionCategoryWhereUniqueInput
    /**
     * In case the OptionCategory found by the `where` argument doesn't exist, create a new OptionCategory with this data.
     */
    create: XOR<OptionCategoryCreateInput, OptionCategoryUncheckedCreateInput>
    /**
     * In case the OptionCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionCategoryUpdateInput, OptionCategoryUncheckedUpdateInput>
  }

  /**
   * OptionCategory delete
   */
  export type OptionCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCategory
     */
    select?: OptionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionCategory
     */
    omit?: OptionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionCategoryInclude<ExtArgs> | null
    /**
     * Filter which OptionCategory to delete.
     */
    where: OptionCategoryWhereUniqueInput
  }

  /**
   * OptionCategory deleteMany
   */
  export type OptionCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OptionCategories to delete
     */
    where?: OptionCategoryWhereInput
    /**
     * Limit how many OptionCategories to delete.
     */
    limit?: number
  }

  /**
   * OptionCategory.options
   */
  export type OptionCategory$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    cursor?: OptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * OptionCategory without action
   */
  export type OptionCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCategory
     */
    select?: OptionCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionCategory
     */
    omit?: OptionCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionAvgAggregateOutputType = {
    priceChf: number | null
  }

  export type OptionSumAggregateOutputType = {
    priceChf: number | null
  }

  export type OptionMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    priceChf: number | null
    hexColor: string | null
    categoryId: string | null
  }

  export type OptionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    priceChf: number | null
    hexColor: string | null
    categoryId: string | null
  }

  export type OptionCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    priceChf: number
    hexColor: number
    categoryId: number
    _all: number
  }


  export type OptionAvgAggregateInputType = {
    priceChf?: true
  }

  export type OptionSumAggregateInputType = {
    priceChf?: true
  }

  export type OptionMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    priceChf?: true
    hexColor?: true
    categoryId?: true
  }

  export type OptionMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    priceChf?: true
    hexColor?: true
    categoryId?: true
  }

  export type OptionCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    priceChf?: true
    hexColor?: true
    categoryId?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option to aggregate.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type OptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithAggregationInput | OptionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: OptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _avg?: OptionAvgAggregateInputType
    _sum?: OptionSumAggregateInputType
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    id: string
    name: string
    slug: string
    priceChf: number
    hexColor: string | null
    categoryId: string
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends OptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type OptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    priceChf?: boolean
    hexColor?: boolean
    categoryId?: boolean
    category?: boolean | OptionCategoryDefaultArgs<ExtArgs>
    configurations?: boolean | Option$configurationsArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    priceChf?: boolean
    hexColor?: boolean
    categoryId?: boolean
    category?: boolean | OptionCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    priceChf?: boolean
    hexColor?: boolean
    categoryId?: boolean
    category?: boolean | OptionCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    priceChf?: boolean
    hexColor?: boolean
    categoryId?: boolean
  }

  export type OptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "priceChf" | "hexColor" | "categoryId", ExtArgs["result"]["option"]>
  export type OptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | OptionCategoryDefaultArgs<ExtArgs>
    configurations?: boolean | Option$configurationsArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | OptionCategoryDefaultArgs<ExtArgs>
  }
  export type OptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | OptionCategoryDefaultArgs<ExtArgs>
  }

  export type $OptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Option"
    objects: {
      category: Prisma.$OptionCategoryPayload<ExtArgs>
      configurations: Prisma.$VehicleConfigurationOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      priceChf: number
      hexColor: string | null
      categoryId: string
    }, ExtArgs["result"]["option"]>
    composites: {}
  }

  type OptionGetPayload<S extends boolean | null | undefined | OptionDefaultArgs> = $Result.GetResult<Prisma.$OptionPayload, S>

  type OptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface OptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option'], meta: { name: 'Option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {OptionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionFindUniqueArgs>(args: SelectSubset<T, OptionFindUniqueArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Option that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionFindFirstArgs>(args?: SelectSubset<T, OptionFindFirstArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionWithIdOnly = await prisma.option.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionFindManyArgs>(args?: SelectSubset<T, OptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Option.
     * @param {OptionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
     */
    create<T extends OptionCreateArgs>(args: SelectSubset<T, OptionCreateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Options.
     * @param {OptionCreateManyArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionCreateManyArgs>(args?: SelectSubset<T, OptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Options and returns the data saved in the database.
     * @param {OptionCreateManyAndReturnArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Options and only return the `id`
     * const optionWithIdOnly = await prisma.option.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Option.
     * @param {OptionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
     */
    delete<T extends OptionDeleteArgs>(args: SelectSubset<T, OptionDeleteArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Option.
     * @param {OptionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionUpdateArgs>(args: SelectSubset<T, OptionUpdateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Options.
     * @param {OptionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionDeleteManyArgs>(args?: SelectSubset<T, OptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionUpdateManyArgs>(args: SelectSubset<T, OptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options and returns the data updated in the database.
     * @param {OptionUpdateManyAndReturnArgs} args - Arguments to update many Options.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Options and only return the `id`
     * const optionWithIdOnly = await prisma.option.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OptionUpdateManyAndReturnArgs>(args: SelectSubset<T, OptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Option.
     * @param {OptionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
     */
    upsert<T extends OptionUpsertArgs>(args: SelectSubset<T, OptionUpsertArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionCountArgs>(
      args?: Subset<T, OptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionGroupByArgs['orderBy'] }
        : { orderBy?: OptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option model
   */
  readonly fields: OptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends OptionCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OptionCategoryDefaultArgs<ExtArgs>>): Prisma__OptionCategoryClient<$Result.GetResult<Prisma.$OptionCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    configurations<T extends Option$configurationsArgs<ExtArgs> = {}>(args?: Subset<T, Option$configurationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleConfigurationOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Option model
   */
  interface OptionFieldRefs {
    readonly id: FieldRef<"Option", 'String'>
    readonly name: FieldRef<"Option", 'String'>
    readonly slug: FieldRef<"Option", 'String'>
    readonly priceChf: FieldRef<"Option", 'Int'>
    readonly hexColor: FieldRef<"Option", 'String'>
    readonly categoryId: FieldRef<"Option", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Option findUnique
   */
  export type OptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findUniqueOrThrow
   */
  export type OptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findFirst
   */
  export type OptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findFirstOrThrow
   */
  export type OptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findMany
   */
  export type OptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option create
   */
  export type OptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Option.
     */
    data: XOR<OptionCreateInput, OptionUncheckedCreateInput>
  }

  /**
   * Option createMany
   */
  export type OptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Option createManyAndReturn
   */
  export type OptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option update
   */
  export type OptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Option.
     */
    data: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    /**
     * Choose, which Option to update.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option updateMany
   */
  export type OptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
  }

  /**
   * Option updateManyAndReturn
   */
  export type OptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option upsert
   */
  export type OptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Option to update in case it exists.
     */
    where: OptionWhereUniqueInput
    /**
     * In case the Option found by the `where` argument doesn't exist, create a new Option with this data.
     */
    create: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    /**
     * In case the Option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
  }

  /**
   * Option delete
   */
  export type OptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter which Option to delete.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option deleteMany
   */
  export type OptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to delete.
     */
    limit?: number
  }

  /**
   * Option.configurations
   */
  export type Option$configurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationOption
     */
    select?: VehicleConfigurationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfigurationOption
     */
    omit?: VehicleConfigurationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationOptionInclude<ExtArgs> | null
    where?: VehicleConfigurationOptionWhereInput
    orderBy?: VehicleConfigurationOptionOrderByWithRelationInput | VehicleConfigurationOptionOrderByWithRelationInput[]
    cursor?: VehicleConfigurationOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleConfigurationOptionScalarFieldEnum | VehicleConfigurationOptionScalarFieldEnum[]
  }

  /**
   * Option without action
   */
  export type OptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
  }


  /**
   * Model VehicleConfiguration
   */

  export type AggregateVehicleConfiguration = {
    _count: VehicleConfigurationCountAggregateOutputType | null
    _avg: VehicleConfigurationAvgAggregateOutputType | null
    _sum: VehicleConfigurationSumAggregateOutputType | null
    _min: VehicleConfigurationMinAggregateOutputType | null
    _max: VehicleConfigurationMaxAggregateOutputType | null
  }

  export type VehicleConfigurationAvgAggregateOutputType = {
    totalPriceChf: number | null
    monthlyLeaseChf: number | null
  }

  export type VehicleConfigurationSumAggregateOutputType = {
    totalPriceChf: number | null
    monthlyLeaseChf: number | null
  }

  export type VehicleConfigurationMinAggregateOutputType = {
    id: string | null
    hashId: string | null
    vehicleId: string | null
    totalPriceChf: number | null
    monthlyLeaseChf: number | null
    createdAt: Date | null
  }

  export type VehicleConfigurationMaxAggregateOutputType = {
    id: string | null
    hashId: string | null
    vehicleId: string | null
    totalPriceChf: number | null
    monthlyLeaseChf: number | null
    createdAt: Date | null
  }

  export type VehicleConfigurationCountAggregateOutputType = {
    id: number
    hashId: number
    vehicleId: number
    totalPriceChf: number
    monthlyLeaseChf: number
    createdAt: number
    _all: number
  }


  export type VehicleConfigurationAvgAggregateInputType = {
    totalPriceChf?: true
    monthlyLeaseChf?: true
  }

  export type VehicleConfigurationSumAggregateInputType = {
    totalPriceChf?: true
    monthlyLeaseChf?: true
  }

  export type VehicleConfigurationMinAggregateInputType = {
    id?: true
    hashId?: true
    vehicleId?: true
    totalPriceChf?: true
    monthlyLeaseChf?: true
    createdAt?: true
  }

  export type VehicleConfigurationMaxAggregateInputType = {
    id?: true
    hashId?: true
    vehicleId?: true
    totalPriceChf?: true
    monthlyLeaseChf?: true
    createdAt?: true
  }

  export type VehicleConfigurationCountAggregateInputType = {
    id?: true
    hashId?: true
    vehicleId?: true
    totalPriceChf?: true
    monthlyLeaseChf?: true
    createdAt?: true
    _all?: true
  }

  export type VehicleConfigurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleConfiguration to aggregate.
     */
    where?: VehicleConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleConfigurations to fetch.
     */
    orderBy?: VehicleConfigurationOrderByWithRelationInput | VehicleConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleConfigurations
    **/
    _count?: true | VehicleConfigurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleConfigurationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleConfigurationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleConfigurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleConfigurationMaxAggregateInputType
  }

  export type GetVehicleConfigurationAggregateType<T extends VehicleConfigurationAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleConfiguration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleConfiguration[P]>
      : GetScalarType<T[P], AggregateVehicleConfiguration[P]>
  }




  export type VehicleConfigurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleConfigurationWhereInput
    orderBy?: VehicleConfigurationOrderByWithAggregationInput | VehicleConfigurationOrderByWithAggregationInput[]
    by: VehicleConfigurationScalarFieldEnum[] | VehicleConfigurationScalarFieldEnum
    having?: VehicleConfigurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleConfigurationCountAggregateInputType | true
    _avg?: VehicleConfigurationAvgAggregateInputType
    _sum?: VehicleConfigurationSumAggregateInputType
    _min?: VehicleConfigurationMinAggregateInputType
    _max?: VehicleConfigurationMaxAggregateInputType
  }

  export type VehicleConfigurationGroupByOutputType = {
    id: string
    hashId: string
    vehicleId: string
    totalPriceChf: number
    monthlyLeaseChf: number
    createdAt: Date
    _count: VehicleConfigurationCountAggregateOutputType | null
    _avg: VehicleConfigurationAvgAggregateOutputType | null
    _sum: VehicleConfigurationSumAggregateOutputType | null
    _min: VehicleConfigurationMinAggregateOutputType | null
    _max: VehicleConfigurationMaxAggregateOutputType | null
  }

  type GetVehicleConfigurationGroupByPayload<T extends VehicleConfigurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleConfigurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleConfigurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleConfigurationGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleConfigurationGroupByOutputType[P]>
        }
      >
    >


  export type VehicleConfigurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hashId?: boolean
    vehicleId?: boolean
    totalPriceChf?: boolean
    monthlyLeaseChf?: boolean
    createdAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    options?: boolean | VehicleConfiguration$optionsArgs<ExtArgs>
    bookings?: boolean | VehicleConfiguration$bookingsArgs<ExtArgs>
    _count?: boolean | VehicleConfigurationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleConfiguration"]>

  export type VehicleConfigurationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hashId?: boolean
    vehicleId?: boolean
    totalPriceChf?: boolean
    monthlyLeaseChf?: boolean
    createdAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleConfiguration"]>

  export type VehicleConfigurationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hashId?: boolean
    vehicleId?: boolean
    totalPriceChf?: boolean
    monthlyLeaseChf?: boolean
    createdAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleConfiguration"]>

  export type VehicleConfigurationSelectScalar = {
    id?: boolean
    hashId?: boolean
    vehicleId?: boolean
    totalPriceChf?: boolean
    monthlyLeaseChf?: boolean
    createdAt?: boolean
  }

  export type VehicleConfigurationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hashId" | "vehicleId" | "totalPriceChf" | "monthlyLeaseChf" | "createdAt", ExtArgs["result"]["vehicleConfiguration"]>
  export type VehicleConfigurationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    options?: boolean | VehicleConfiguration$optionsArgs<ExtArgs>
    bookings?: boolean | VehicleConfiguration$bookingsArgs<ExtArgs>
    _count?: boolean | VehicleConfigurationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleConfigurationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type VehicleConfigurationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $VehicleConfigurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleConfiguration"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      options: Prisma.$VehicleConfigurationOptionPayload<ExtArgs>[]
      bookings: Prisma.$VIPBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hashId: string
      vehicleId: string
      totalPriceChf: number
      monthlyLeaseChf: number
      createdAt: Date
    }, ExtArgs["result"]["vehicleConfiguration"]>
    composites: {}
  }

  type VehicleConfigurationGetPayload<S extends boolean | null | undefined | VehicleConfigurationDefaultArgs> = $Result.GetResult<Prisma.$VehicleConfigurationPayload, S>

  type VehicleConfigurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleConfigurationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleConfigurationCountAggregateInputType | true
    }

  export interface VehicleConfigurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleConfiguration'], meta: { name: 'VehicleConfiguration' } }
    /**
     * Find zero or one VehicleConfiguration that matches the filter.
     * @param {VehicleConfigurationFindUniqueArgs} args - Arguments to find a VehicleConfiguration
     * @example
     * // Get one VehicleConfiguration
     * const vehicleConfiguration = await prisma.vehicleConfiguration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleConfigurationFindUniqueArgs>(args: SelectSubset<T, VehicleConfigurationFindUniqueArgs<ExtArgs>>): Prisma__VehicleConfigurationClient<$Result.GetResult<Prisma.$VehicleConfigurationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleConfiguration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleConfigurationFindUniqueOrThrowArgs} args - Arguments to find a VehicleConfiguration
     * @example
     * // Get one VehicleConfiguration
     * const vehicleConfiguration = await prisma.vehicleConfiguration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleConfigurationFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleConfigurationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleConfigurationClient<$Result.GetResult<Prisma.$VehicleConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleConfiguration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleConfigurationFindFirstArgs} args - Arguments to find a VehicleConfiguration
     * @example
     * // Get one VehicleConfiguration
     * const vehicleConfiguration = await prisma.vehicleConfiguration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleConfigurationFindFirstArgs>(args?: SelectSubset<T, VehicleConfigurationFindFirstArgs<ExtArgs>>): Prisma__VehicleConfigurationClient<$Result.GetResult<Prisma.$VehicleConfigurationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleConfiguration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleConfigurationFindFirstOrThrowArgs} args - Arguments to find a VehicleConfiguration
     * @example
     * // Get one VehicleConfiguration
     * const vehicleConfiguration = await prisma.vehicleConfiguration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleConfigurationFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleConfigurationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleConfigurationClient<$Result.GetResult<Prisma.$VehicleConfigurationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleConfigurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleConfigurationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleConfigurations
     * const vehicleConfigurations = await prisma.vehicleConfiguration.findMany()
     * 
     * // Get first 10 VehicleConfigurations
     * const vehicleConfigurations = await prisma.vehicleConfiguration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleConfigurationWithIdOnly = await prisma.vehicleConfiguration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleConfigurationFindManyArgs>(args?: SelectSubset<T, VehicleConfigurationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleConfiguration.
     * @param {VehicleConfigurationCreateArgs} args - Arguments to create a VehicleConfiguration.
     * @example
     * // Create one VehicleConfiguration
     * const VehicleConfiguration = await prisma.vehicleConfiguration.create({
     *   data: {
     *     // ... data to create a VehicleConfiguration
     *   }
     * })
     * 
     */
    create<T extends VehicleConfigurationCreateArgs>(args: SelectSubset<T, VehicleConfigurationCreateArgs<ExtArgs>>): Prisma__VehicleConfigurationClient<$Result.GetResult<Prisma.$VehicleConfigurationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleConfigurations.
     * @param {VehicleConfigurationCreateManyArgs} args - Arguments to create many VehicleConfigurations.
     * @example
     * // Create many VehicleConfigurations
     * const vehicleConfiguration = await prisma.vehicleConfiguration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleConfigurationCreateManyArgs>(args?: SelectSubset<T, VehicleConfigurationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleConfigurations and returns the data saved in the database.
     * @param {VehicleConfigurationCreateManyAndReturnArgs} args - Arguments to create many VehicleConfigurations.
     * @example
     * // Create many VehicleConfigurations
     * const vehicleConfiguration = await prisma.vehicleConfiguration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleConfigurations and only return the `id`
     * const vehicleConfigurationWithIdOnly = await prisma.vehicleConfiguration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleConfigurationCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleConfigurationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleConfigurationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehicleConfiguration.
     * @param {VehicleConfigurationDeleteArgs} args - Arguments to delete one VehicleConfiguration.
     * @example
     * // Delete one VehicleConfiguration
     * const VehicleConfiguration = await prisma.vehicleConfiguration.delete({
     *   where: {
     *     // ... filter to delete one VehicleConfiguration
     *   }
     * })
     * 
     */
    delete<T extends VehicleConfigurationDeleteArgs>(args: SelectSubset<T, VehicleConfigurationDeleteArgs<ExtArgs>>): Prisma__VehicleConfigurationClient<$Result.GetResult<Prisma.$VehicleConfigurationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleConfiguration.
     * @param {VehicleConfigurationUpdateArgs} args - Arguments to update one VehicleConfiguration.
     * @example
     * // Update one VehicleConfiguration
     * const vehicleConfiguration = await prisma.vehicleConfiguration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleConfigurationUpdateArgs>(args: SelectSubset<T, VehicleConfigurationUpdateArgs<ExtArgs>>): Prisma__VehicleConfigurationClient<$Result.GetResult<Prisma.$VehicleConfigurationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleConfigurations.
     * @param {VehicleConfigurationDeleteManyArgs} args - Arguments to filter VehicleConfigurations to delete.
     * @example
     * // Delete a few VehicleConfigurations
     * const { count } = await prisma.vehicleConfiguration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleConfigurationDeleteManyArgs>(args?: SelectSubset<T, VehicleConfigurationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleConfigurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleConfigurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleConfigurations
     * const vehicleConfiguration = await prisma.vehicleConfiguration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleConfigurationUpdateManyArgs>(args: SelectSubset<T, VehicleConfigurationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleConfigurations and returns the data updated in the database.
     * @param {VehicleConfigurationUpdateManyAndReturnArgs} args - Arguments to update many VehicleConfigurations.
     * @example
     * // Update many VehicleConfigurations
     * const vehicleConfiguration = await prisma.vehicleConfiguration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehicleConfigurations and only return the `id`
     * const vehicleConfigurationWithIdOnly = await prisma.vehicleConfiguration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleConfigurationUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleConfigurationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleConfigurationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehicleConfiguration.
     * @param {VehicleConfigurationUpsertArgs} args - Arguments to update or create a VehicleConfiguration.
     * @example
     * // Update or create a VehicleConfiguration
     * const vehicleConfiguration = await prisma.vehicleConfiguration.upsert({
     *   create: {
     *     // ... data to create a VehicleConfiguration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleConfiguration we want to update
     *   }
     * })
     */
    upsert<T extends VehicleConfigurationUpsertArgs>(args: SelectSubset<T, VehicleConfigurationUpsertArgs<ExtArgs>>): Prisma__VehicleConfigurationClient<$Result.GetResult<Prisma.$VehicleConfigurationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleConfigurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleConfigurationCountArgs} args - Arguments to filter VehicleConfigurations to count.
     * @example
     * // Count the number of VehicleConfigurations
     * const count = await prisma.vehicleConfiguration.count({
     *   where: {
     *     // ... the filter for the VehicleConfigurations we want to count
     *   }
     * })
    **/
    count<T extends VehicleConfigurationCountArgs>(
      args?: Subset<T, VehicleConfigurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleConfigurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleConfiguration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleConfigurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleConfigurationAggregateArgs>(args: Subset<T, VehicleConfigurationAggregateArgs>): Prisma.PrismaPromise<GetVehicleConfigurationAggregateType<T>>

    /**
     * Group by VehicleConfiguration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleConfigurationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleConfigurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleConfigurationGroupByArgs['orderBy'] }
        : { orderBy?: VehicleConfigurationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleConfigurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleConfigurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleConfiguration model
   */
  readonly fields: VehicleConfigurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleConfiguration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleConfigurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends VehicleConfiguration$optionsArgs<ExtArgs> = {}>(args?: Subset<T, VehicleConfiguration$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleConfigurationOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends VehicleConfiguration$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, VehicleConfiguration$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VIPBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VehicleConfiguration model
   */
  interface VehicleConfigurationFieldRefs {
    readonly id: FieldRef<"VehicleConfiguration", 'String'>
    readonly hashId: FieldRef<"VehicleConfiguration", 'String'>
    readonly vehicleId: FieldRef<"VehicleConfiguration", 'String'>
    readonly totalPriceChf: FieldRef<"VehicleConfiguration", 'Int'>
    readonly monthlyLeaseChf: FieldRef<"VehicleConfiguration", 'Int'>
    readonly createdAt: FieldRef<"VehicleConfiguration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VehicleConfiguration findUnique
   */
  export type VehicleConfigurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfiguration
     */
    select?: VehicleConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfiguration
     */
    omit?: VehicleConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which VehicleConfiguration to fetch.
     */
    where: VehicleConfigurationWhereUniqueInput
  }

  /**
   * VehicleConfiguration findUniqueOrThrow
   */
  export type VehicleConfigurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfiguration
     */
    select?: VehicleConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfiguration
     */
    omit?: VehicleConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which VehicleConfiguration to fetch.
     */
    where: VehicleConfigurationWhereUniqueInput
  }

  /**
   * VehicleConfiguration findFirst
   */
  export type VehicleConfigurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfiguration
     */
    select?: VehicleConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfiguration
     */
    omit?: VehicleConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which VehicleConfiguration to fetch.
     */
    where?: VehicleConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleConfigurations to fetch.
     */
    orderBy?: VehicleConfigurationOrderByWithRelationInput | VehicleConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleConfigurations.
     */
    cursor?: VehicleConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleConfigurations.
     */
    distinct?: VehicleConfigurationScalarFieldEnum | VehicleConfigurationScalarFieldEnum[]
  }

  /**
   * VehicleConfiguration findFirstOrThrow
   */
  export type VehicleConfigurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfiguration
     */
    select?: VehicleConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfiguration
     */
    omit?: VehicleConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which VehicleConfiguration to fetch.
     */
    where?: VehicleConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleConfigurations to fetch.
     */
    orderBy?: VehicleConfigurationOrderByWithRelationInput | VehicleConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleConfigurations.
     */
    cursor?: VehicleConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleConfigurations.
     */
    distinct?: VehicleConfigurationScalarFieldEnum | VehicleConfigurationScalarFieldEnum[]
  }

  /**
   * VehicleConfiguration findMany
   */
  export type VehicleConfigurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfiguration
     */
    select?: VehicleConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfiguration
     */
    omit?: VehicleConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which VehicleConfigurations to fetch.
     */
    where?: VehicleConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleConfigurations to fetch.
     */
    orderBy?: VehicleConfigurationOrderByWithRelationInput | VehicleConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleConfigurations.
     */
    cursor?: VehicleConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleConfigurations.
     */
    distinct?: VehicleConfigurationScalarFieldEnum | VehicleConfigurationScalarFieldEnum[]
  }

  /**
   * VehicleConfiguration create
   */
  export type VehicleConfigurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfiguration
     */
    select?: VehicleConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfiguration
     */
    omit?: VehicleConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleConfiguration.
     */
    data: XOR<VehicleConfigurationCreateInput, VehicleConfigurationUncheckedCreateInput>
  }

  /**
   * VehicleConfiguration createMany
   */
  export type VehicleConfigurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleConfigurations.
     */
    data: VehicleConfigurationCreateManyInput | VehicleConfigurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleConfiguration createManyAndReturn
   */
  export type VehicleConfigurationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfiguration
     */
    select?: VehicleConfigurationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfiguration
     */
    omit?: VehicleConfigurationOmit<ExtArgs> | null
    /**
     * The data used to create many VehicleConfigurations.
     */
    data: VehicleConfigurationCreateManyInput | VehicleConfigurationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleConfiguration update
   */
  export type VehicleConfigurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfiguration
     */
    select?: VehicleConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfiguration
     */
    omit?: VehicleConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleConfiguration.
     */
    data: XOR<VehicleConfigurationUpdateInput, VehicleConfigurationUncheckedUpdateInput>
    /**
     * Choose, which VehicleConfiguration to update.
     */
    where: VehicleConfigurationWhereUniqueInput
  }

  /**
   * VehicleConfiguration updateMany
   */
  export type VehicleConfigurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleConfigurations.
     */
    data: XOR<VehicleConfigurationUpdateManyMutationInput, VehicleConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which VehicleConfigurations to update
     */
    where?: VehicleConfigurationWhereInput
    /**
     * Limit how many VehicleConfigurations to update.
     */
    limit?: number
  }

  /**
   * VehicleConfiguration updateManyAndReturn
   */
  export type VehicleConfigurationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfiguration
     */
    select?: VehicleConfigurationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfiguration
     */
    omit?: VehicleConfigurationOmit<ExtArgs> | null
    /**
     * The data used to update VehicleConfigurations.
     */
    data: XOR<VehicleConfigurationUpdateManyMutationInput, VehicleConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which VehicleConfigurations to update
     */
    where?: VehicleConfigurationWhereInput
    /**
     * Limit how many VehicleConfigurations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleConfiguration upsert
   */
  export type VehicleConfigurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfiguration
     */
    select?: VehicleConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfiguration
     */
    omit?: VehicleConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleConfiguration to update in case it exists.
     */
    where: VehicleConfigurationWhereUniqueInput
    /**
     * In case the VehicleConfiguration found by the `where` argument doesn't exist, create a new VehicleConfiguration with this data.
     */
    create: XOR<VehicleConfigurationCreateInput, VehicleConfigurationUncheckedCreateInput>
    /**
     * In case the VehicleConfiguration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleConfigurationUpdateInput, VehicleConfigurationUncheckedUpdateInput>
  }

  /**
   * VehicleConfiguration delete
   */
  export type VehicleConfigurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfiguration
     */
    select?: VehicleConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfiguration
     */
    omit?: VehicleConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationInclude<ExtArgs> | null
    /**
     * Filter which VehicleConfiguration to delete.
     */
    where: VehicleConfigurationWhereUniqueInput
  }

  /**
   * VehicleConfiguration deleteMany
   */
  export type VehicleConfigurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleConfigurations to delete
     */
    where?: VehicleConfigurationWhereInput
    /**
     * Limit how many VehicleConfigurations to delete.
     */
    limit?: number
  }

  /**
   * VehicleConfiguration.options
   */
  export type VehicleConfiguration$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationOption
     */
    select?: VehicleConfigurationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfigurationOption
     */
    omit?: VehicleConfigurationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationOptionInclude<ExtArgs> | null
    where?: VehicleConfigurationOptionWhereInput
    orderBy?: VehicleConfigurationOptionOrderByWithRelationInput | VehicleConfigurationOptionOrderByWithRelationInput[]
    cursor?: VehicleConfigurationOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleConfigurationOptionScalarFieldEnum | VehicleConfigurationOptionScalarFieldEnum[]
  }

  /**
   * VehicleConfiguration.bookings
   */
  export type VehicleConfiguration$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VIPBooking
     */
    select?: VIPBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VIPBooking
     */
    omit?: VIPBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VIPBookingInclude<ExtArgs> | null
    where?: VIPBookingWhereInput
    orderBy?: VIPBookingOrderByWithRelationInput | VIPBookingOrderByWithRelationInput[]
    cursor?: VIPBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VIPBookingScalarFieldEnum | VIPBookingScalarFieldEnum[]
  }

  /**
   * VehicleConfiguration without action
   */
  export type VehicleConfigurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfiguration
     */
    select?: VehicleConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfiguration
     */
    omit?: VehicleConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationInclude<ExtArgs> | null
  }


  /**
   * Model VehicleConfigurationOption
   */

  export type AggregateVehicleConfigurationOption = {
    _count: VehicleConfigurationOptionCountAggregateOutputType | null
    _min: VehicleConfigurationOptionMinAggregateOutputType | null
    _max: VehicleConfigurationOptionMaxAggregateOutputType | null
  }

  export type VehicleConfigurationOptionMinAggregateOutputType = {
    id: string | null
    configurationId: string | null
    optionId: string | null
  }

  export type VehicleConfigurationOptionMaxAggregateOutputType = {
    id: string | null
    configurationId: string | null
    optionId: string | null
  }

  export type VehicleConfigurationOptionCountAggregateOutputType = {
    id: number
    configurationId: number
    optionId: number
    _all: number
  }


  export type VehicleConfigurationOptionMinAggregateInputType = {
    id?: true
    configurationId?: true
    optionId?: true
  }

  export type VehicleConfigurationOptionMaxAggregateInputType = {
    id?: true
    configurationId?: true
    optionId?: true
  }

  export type VehicleConfigurationOptionCountAggregateInputType = {
    id?: true
    configurationId?: true
    optionId?: true
    _all?: true
  }

  export type VehicleConfigurationOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleConfigurationOption to aggregate.
     */
    where?: VehicleConfigurationOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleConfigurationOptions to fetch.
     */
    orderBy?: VehicleConfigurationOptionOrderByWithRelationInput | VehicleConfigurationOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleConfigurationOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleConfigurationOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleConfigurationOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleConfigurationOptions
    **/
    _count?: true | VehicleConfigurationOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleConfigurationOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleConfigurationOptionMaxAggregateInputType
  }

  export type GetVehicleConfigurationOptionAggregateType<T extends VehicleConfigurationOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleConfigurationOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleConfigurationOption[P]>
      : GetScalarType<T[P], AggregateVehicleConfigurationOption[P]>
  }




  export type VehicleConfigurationOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleConfigurationOptionWhereInput
    orderBy?: VehicleConfigurationOptionOrderByWithAggregationInput | VehicleConfigurationOptionOrderByWithAggregationInput[]
    by: VehicleConfigurationOptionScalarFieldEnum[] | VehicleConfigurationOptionScalarFieldEnum
    having?: VehicleConfigurationOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleConfigurationOptionCountAggregateInputType | true
    _min?: VehicleConfigurationOptionMinAggregateInputType
    _max?: VehicleConfigurationOptionMaxAggregateInputType
  }

  export type VehicleConfigurationOptionGroupByOutputType = {
    id: string
    configurationId: string
    optionId: string
    _count: VehicleConfigurationOptionCountAggregateOutputType | null
    _min: VehicleConfigurationOptionMinAggregateOutputType | null
    _max: VehicleConfigurationOptionMaxAggregateOutputType | null
  }

  type GetVehicleConfigurationOptionGroupByPayload<T extends VehicleConfigurationOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleConfigurationOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleConfigurationOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleConfigurationOptionGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleConfigurationOptionGroupByOutputType[P]>
        }
      >
    >


  export type VehicleConfigurationOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configurationId?: boolean
    optionId?: boolean
    configuration?: boolean | VehicleConfigurationDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleConfigurationOption"]>

  export type VehicleConfigurationOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configurationId?: boolean
    optionId?: boolean
    configuration?: boolean | VehicleConfigurationDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleConfigurationOption"]>

  export type VehicleConfigurationOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configurationId?: boolean
    optionId?: boolean
    configuration?: boolean | VehicleConfigurationDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleConfigurationOption"]>

  export type VehicleConfigurationOptionSelectScalar = {
    id?: boolean
    configurationId?: boolean
    optionId?: boolean
  }

  export type VehicleConfigurationOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "configurationId" | "optionId", ExtArgs["result"]["vehicleConfigurationOption"]>
  export type VehicleConfigurationOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configuration?: boolean | VehicleConfigurationDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
  }
  export type VehicleConfigurationOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configuration?: boolean | VehicleConfigurationDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
  }
  export type VehicleConfigurationOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configuration?: boolean | VehicleConfigurationDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
  }

  export type $VehicleConfigurationOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleConfigurationOption"
    objects: {
      configuration: Prisma.$VehicleConfigurationPayload<ExtArgs>
      option: Prisma.$OptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      configurationId: string
      optionId: string
    }, ExtArgs["result"]["vehicleConfigurationOption"]>
    composites: {}
  }

  type VehicleConfigurationOptionGetPayload<S extends boolean | null | undefined | VehicleConfigurationOptionDefaultArgs> = $Result.GetResult<Prisma.$VehicleConfigurationOptionPayload, S>

  type VehicleConfigurationOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleConfigurationOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleConfigurationOptionCountAggregateInputType | true
    }

  export interface VehicleConfigurationOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleConfigurationOption'], meta: { name: 'VehicleConfigurationOption' } }
    /**
     * Find zero or one VehicleConfigurationOption that matches the filter.
     * @param {VehicleConfigurationOptionFindUniqueArgs} args - Arguments to find a VehicleConfigurationOption
     * @example
     * // Get one VehicleConfigurationOption
     * const vehicleConfigurationOption = await prisma.vehicleConfigurationOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleConfigurationOptionFindUniqueArgs>(args: SelectSubset<T, VehicleConfigurationOptionFindUniqueArgs<ExtArgs>>): Prisma__VehicleConfigurationOptionClient<$Result.GetResult<Prisma.$VehicleConfigurationOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleConfigurationOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleConfigurationOptionFindUniqueOrThrowArgs} args - Arguments to find a VehicleConfigurationOption
     * @example
     * // Get one VehicleConfigurationOption
     * const vehicleConfigurationOption = await prisma.vehicleConfigurationOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleConfigurationOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleConfigurationOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleConfigurationOptionClient<$Result.GetResult<Prisma.$VehicleConfigurationOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleConfigurationOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleConfigurationOptionFindFirstArgs} args - Arguments to find a VehicleConfigurationOption
     * @example
     * // Get one VehicleConfigurationOption
     * const vehicleConfigurationOption = await prisma.vehicleConfigurationOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleConfigurationOptionFindFirstArgs>(args?: SelectSubset<T, VehicleConfigurationOptionFindFirstArgs<ExtArgs>>): Prisma__VehicleConfigurationOptionClient<$Result.GetResult<Prisma.$VehicleConfigurationOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleConfigurationOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleConfigurationOptionFindFirstOrThrowArgs} args - Arguments to find a VehicleConfigurationOption
     * @example
     * // Get one VehicleConfigurationOption
     * const vehicleConfigurationOption = await prisma.vehicleConfigurationOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleConfigurationOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleConfigurationOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleConfigurationOptionClient<$Result.GetResult<Prisma.$VehicleConfigurationOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleConfigurationOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleConfigurationOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleConfigurationOptions
     * const vehicleConfigurationOptions = await prisma.vehicleConfigurationOption.findMany()
     * 
     * // Get first 10 VehicleConfigurationOptions
     * const vehicleConfigurationOptions = await prisma.vehicleConfigurationOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleConfigurationOptionWithIdOnly = await prisma.vehicleConfigurationOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleConfigurationOptionFindManyArgs>(args?: SelectSubset<T, VehicleConfigurationOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleConfigurationOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleConfigurationOption.
     * @param {VehicleConfigurationOptionCreateArgs} args - Arguments to create a VehicleConfigurationOption.
     * @example
     * // Create one VehicleConfigurationOption
     * const VehicleConfigurationOption = await prisma.vehicleConfigurationOption.create({
     *   data: {
     *     // ... data to create a VehicleConfigurationOption
     *   }
     * })
     * 
     */
    create<T extends VehicleConfigurationOptionCreateArgs>(args: SelectSubset<T, VehicleConfigurationOptionCreateArgs<ExtArgs>>): Prisma__VehicleConfigurationOptionClient<$Result.GetResult<Prisma.$VehicleConfigurationOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleConfigurationOptions.
     * @param {VehicleConfigurationOptionCreateManyArgs} args - Arguments to create many VehicleConfigurationOptions.
     * @example
     * // Create many VehicleConfigurationOptions
     * const vehicleConfigurationOption = await prisma.vehicleConfigurationOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleConfigurationOptionCreateManyArgs>(args?: SelectSubset<T, VehicleConfigurationOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleConfigurationOptions and returns the data saved in the database.
     * @param {VehicleConfigurationOptionCreateManyAndReturnArgs} args - Arguments to create many VehicleConfigurationOptions.
     * @example
     * // Create many VehicleConfigurationOptions
     * const vehicleConfigurationOption = await prisma.vehicleConfigurationOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleConfigurationOptions and only return the `id`
     * const vehicleConfigurationOptionWithIdOnly = await prisma.vehicleConfigurationOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleConfigurationOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleConfigurationOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleConfigurationOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehicleConfigurationOption.
     * @param {VehicleConfigurationOptionDeleteArgs} args - Arguments to delete one VehicleConfigurationOption.
     * @example
     * // Delete one VehicleConfigurationOption
     * const VehicleConfigurationOption = await prisma.vehicleConfigurationOption.delete({
     *   where: {
     *     // ... filter to delete one VehicleConfigurationOption
     *   }
     * })
     * 
     */
    delete<T extends VehicleConfigurationOptionDeleteArgs>(args: SelectSubset<T, VehicleConfigurationOptionDeleteArgs<ExtArgs>>): Prisma__VehicleConfigurationOptionClient<$Result.GetResult<Prisma.$VehicleConfigurationOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleConfigurationOption.
     * @param {VehicleConfigurationOptionUpdateArgs} args - Arguments to update one VehicleConfigurationOption.
     * @example
     * // Update one VehicleConfigurationOption
     * const vehicleConfigurationOption = await prisma.vehicleConfigurationOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleConfigurationOptionUpdateArgs>(args: SelectSubset<T, VehicleConfigurationOptionUpdateArgs<ExtArgs>>): Prisma__VehicleConfigurationOptionClient<$Result.GetResult<Prisma.$VehicleConfigurationOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleConfigurationOptions.
     * @param {VehicleConfigurationOptionDeleteManyArgs} args - Arguments to filter VehicleConfigurationOptions to delete.
     * @example
     * // Delete a few VehicleConfigurationOptions
     * const { count } = await prisma.vehicleConfigurationOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleConfigurationOptionDeleteManyArgs>(args?: SelectSubset<T, VehicleConfigurationOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleConfigurationOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleConfigurationOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleConfigurationOptions
     * const vehicleConfigurationOption = await prisma.vehicleConfigurationOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleConfigurationOptionUpdateManyArgs>(args: SelectSubset<T, VehicleConfigurationOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleConfigurationOptions and returns the data updated in the database.
     * @param {VehicleConfigurationOptionUpdateManyAndReturnArgs} args - Arguments to update many VehicleConfigurationOptions.
     * @example
     * // Update many VehicleConfigurationOptions
     * const vehicleConfigurationOption = await prisma.vehicleConfigurationOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehicleConfigurationOptions and only return the `id`
     * const vehicleConfigurationOptionWithIdOnly = await prisma.vehicleConfigurationOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleConfigurationOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleConfigurationOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleConfigurationOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehicleConfigurationOption.
     * @param {VehicleConfigurationOptionUpsertArgs} args - Arguments to update or create a VehicleConfigurationOption.
     * @example
     * // Update or create a VehicleConfigurationOption
     * const vehicleConfigurationOption = await prisma.vehicleConfigurationOption.upsert({
     *   create: {
     *     // ... data to create a VehicleConfigurationOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleConfigurationOption we want to update
     *   }
     * })
     */
    upsert<T extends VehicleConfigurationOptionUpsertArgs>(args: SelectSubset<T, VehicleConfigurationOptionUpsertArgs<ExtArgs>>): Prisma__VehicleConfigurationOptionClient<$Result.GetResult<Prisma.$VehicleConfigurationOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleConfigurationOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleConfigurationOptionCountArgs} args - Arguments to filter VehicleConfigurationOptions to count.
     * @example
     * // Count the number of VehicleConfigurationOptions
     * const count = await prisma.vehicleConfigurationOption.count({
     *   where: {
     *     // ... the filter for the VehicleConfigurationOptions we want to count
     *   }
     * })
    **/
    count<T extends VehicleConfigurationOptionCountArgs>(
      args?: Subset<T, VehicleConfigurationOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleConfigurationOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleConfigurationOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleConfigurationOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleConfigurationOptionAggregateArgs>(args: Subset<T, VehicleConfigurationOptionAggregateArgs>): Prisma.PrismaPromise<GetVehicleConfigurationOptionAggregateType<T>>

    /**
     * Group by VehicleConfigurationOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleConfigurationOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleConfigurationOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleConfigurationOptionGroupByArgs['orderBy'] }
        : { orderBy?: VehicleConfigurationOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleConfigurationOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleConfigurationOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleConfigurationOption model
   */
  readonly fields: VehicleConfigurationOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleConfigurationOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleConfigurationOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    configuration<T extends VehicleConfigurationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleConfigurationDefaultArgs<ExtArgs>>): Prisma__VehicleConfigurationClient<$Result.GetResult<Prisma.$VehicleConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    option<T extends OptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OptionDefaultArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VehicleConfigurationOption model
   */
  interface VehicleConfigurationOptionFieldRefs {
    readonly id: FieldRef<"VehicleConfigurationOption", 'String'>
    readonly configurationId: FieldRef<"VehicleConfigurationOption", 'String'>
    readonly optionId: FieldRef<"VehicleConfigurationOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VehicleConfigurationOption findUnique
   */
  export type VehicleConfigurationOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationOption
     */
    select?: VehicleConfigurationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfigurationOption
     */
    omit?: VehicleConfigurationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationOptionInclude<ExtArgs> | null
    /**
     * Filter, which VehicleConfigurationOption to fetch.
     */
    where: VehicleConfigurationOptionWhereUniqueInput
  }

  /**
   * VehicleConfigurationOption findUniqueOrThrow
   */
  export type VehicleConfigurationOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationOption
     */
    select?: VehicleConfigurationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfigurationOption
     */
    omit?: VehicleConfigurationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationOptionInclude<ExtArgs> | null
    /**
     * Filter, which VehicleConfigurationOption to fetch.
     */
    where: VehicleConfigurationOptionWhereUniqueInput
  }

  /**
   * VehicleConfigurationOption findFirst
   */
  export type VehicleConfigurationOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationOption
     */
    select?: VehicleConfigurationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfigurationOption
     */
    omit?: VehicleConfigurationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationOptionInclude<ExtArgs> | null
    /**
     * Filter, which VehicleConfigurationOption to fetch.
     */
    where?: VehicleConfigurationOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleConfigurationOptions to fetch.
     */
    orderBy?: VehicleConfigurationOptionOrderByWithRelationInput | VehicleConfigurationOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleConfigurationOptions.
     */
    cursor?: VehicleConfigurationOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleConfigurationOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleConfigurationOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleConfigurationOptions.
     */
    distinct?: VehicleConfigurationOptionScalarFieldEnum | VehicleConfigurationOptionScalarFieldEnum[]
  }

  /**
   * VehicleConfigurationOption findFirstOrThrow
   */
  export type VehicleConfigurationOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationOption
     */
    select?: VehicleConfigurationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfigurationOption
     */
    omit?: VehicleConfigurationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationOptionInclude<ExtArgs> | null
    /**
     * Filter, which VehicleConfigurationOption to fetch.
     */
    where?: VehicleConfigurationOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleConfigurationOptions to fetch.
     */
    orderBy?: VehicleConfigurationOptionOrderByWithRelationInput | VehicleConfigurationOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleConfigurationOptions.
     */
    cursor?: VehicleConfigurationOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleConfigurationOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleConfigurationOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleConfigurationOptions.
     */
    distinct?: VehicleConfigurationOptionScalarFieldEnum | VehicleConfigurationOptionScalarFieldEnum[]
  }

  /**
   * VehicleConfigurationOption findMany
   */
  export type VehicleConfigurationOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationOption
     */
    select?: VehicleConfigurationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfigurationOption
     */
    omit?: VehicleConfigurationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationOptionInclude<ExtArgs> | null
    /**
     * Filter, which VehicleConfigurationOptions to fetch.
     */
    where?: VehicleConfigurationOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleConfigurationOptions to fetch.
     */
    orderBy?: VehicleConfigurationOptionOrderByWithRelationInput | VehicleConfigurationOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleConfigurationOptions.
     */
    cursor?: VehicleConfigurationOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleConfigurationOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleConfigurationOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleConfigurationOptions.
     */
    distinct?: VehicleConfigurationOptionScalarFieldEnum | VehicleConfigurationOptionScalarFieldEnum[]
  }

  /**
   * VehicleConfigurationOption create
   */
  export type VehicleConfigurationOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationOption
     */
    select?: VehicleConfigurationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfigurationOption
     */
    omit?: VehicleConfigurationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleConfigurationOption.
     */
    data: XOR<VehicleConfigurationOptionCreateInput, VehicleConfigurationOptionUncheckedCreateInput>
  }

  /**
   * VehicleConfigurationOption createMany
   */
  export type VehicleConfigurationOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleConfigurationOptions.
     */
    data: VehicleConfigurationOptionCreateManyInput | VehicleConfigurationOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleConfigurationOption createManyAndReturn
   */
  export type VehicleConfigurationOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationOption
     */
    select?: VehicleConfigurationOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfigurationOption
     */
    omit?: VehicleConfigurationOptionOmit<ExtArgs> | null
    /**
     * The data used to create many VehicleConfigurationOptions.
     */
    data: VehicleConfigurationOptionCreateManyInput | VehicleConfigurationOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleConfigurationOption update
   */
  export type VehicleConfigurationOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationOption
     */
    select?: VehicleConfigurationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfigurationOption
     */
    omit?: VehicleConfigurationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleConfigurationOption.
     */
    data: XOR<VehicleConfigurationOptionUpdateInput, VehicleConfigurationOptionUncheckedUpdateInput>
    /**
     * Choose, which VehicleConfigurationOption to update.
     */
    where: VehicleConfigurationOptionWhereUniqueInput
  }

  /**
   * VehicleConfigurationOption updateMany
   */
  export type VehicleConfigurationOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleConfigurationOptions.
     */
    data: XOR<VehicleConfigurationOptionUpdateManyMutationInput, VehicleConfigurationOptionUncheckedUpdateManyInput>
    /**
     * Filter which VehicleConfigurationOptions to update
     */
    where?: VehicleConfigurationOptionWhereInput
    /**
     * Limit how many VehicleConfigurationOptions to update.
     */
    limit?: number
  }

  /**
   * VehicleConfigurationOption updateManyAndReturn
   */
  export type VehicleConfigurationOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationOption
     */
    select?: VehicleConfigurationOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfigurationOption
     */
    omit?: VehicleConfigurationOptionOmit<ExtArgs> | null
    /**
     * The data used to update VehicleConfigurationOptions.
     */
    data: XOR<VehicleConfigurationOptionUpdateManyMutationInput, VehicleConfigurationOptionUncheckedUpdateManyInput>
    /**
     * Filter which VehicleConfigurationOptions to update
     */
    where?: VehicleConfigurationOptionWhereInput
    /**
     * Limit how many VehicleConfigurationOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleConfigurationOption upsert
   */
  export type VehicleConfigurationOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationOption
     */
    select?: VehicleConfigurationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfigurationOption
     */
    omit?: VehicleConfigurationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleConfigurationOption to update in case it exists.
     */
    where: VehicleConfigurationOptionWhereUniqueInput
    /**
     * In case the VehicleConfigurationOption found by the `where` argument doesn't exist, create a new VehicleConfigurationOption with this data.
     */
    create: XOR<VehicleConfigurationOptionCreateInput, VehicleConfigurationOptionUncheckedCreateInput>
    /**
     * In case the VehicleConfigurationOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleConfigurationOptionUpdateInput, VehicleConfigurationOptionUncheckedUpdateInput>
  }

  /**
   * VehicleConfigurationOption delete
   */
  export type VehicleConfigurationOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationOption
     */
    select?: VehicleConfigurationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfigurationOption
     */
    omit?: VehicleConfigurationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationOptionInclude<ExtArgs> | null
    /**
     * Filter which VehicleConfigurationOption to delete.
     */
    where: VehicleConfigurationOptionWhereUniqueInput
  }

  /**
   * VehicleConfigurationOption deleteMany
   */
  export type VehicleConfigurationOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleConfigurationOptions to delete
     */
    where?: VehicleConfigurationOptionWhereInput
    /**
     * Limit how many VehicleConfigurationOptions to delete.
     */
    limit?: number
  }

  /**
   * VehicleConfigurationOption without action
   */
  export type VehicleConfigurationOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfigurationOption
     */
    select?: VehicleConfigurationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfigurationOption
     */
    omit?: VehicleConfigurationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationOptionInclude<ExtArgs> | null
  }


  /**
   * Model VIPBooking
   */

  export type AggregateVIPBooking = {
    _count: VIPBookingCountAggregateOutputType | null
    _min: VIPBookingMinAggregateOutputType | null
    _max: VIPBookingMaxAggregateOutputType | null
  }

  export type VIPBookingMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    contactMethod: $Enums.ContactMethod | null
    appointmentType: $Enums.AppointmentType | null
    preferredDate: Date | null
    preferredTime: string | null
    notes: string | null
    vehicleId: string | null
    configurationId: string | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
  }

  export type VIPBookingMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    contactMethod: $Enums.ContactMethod | null
    appointmentType: $Enums.AppointmentType | null
    preferredDate: Date | null
    preferredTime: string | null
    notes: string | null
    vehicleId: string | null
    configurationId: string | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
  }

  export type VIPBookingCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phone: number
    contactMethod: number
    appointmentType: number
    preferredDate: number
    preferredTime: number
    notes: number
    vehicleId: number
    configurationId: number
    status: number
    createdAt: number
    _all: number
  }


  export type VIPBookingMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    contactMethod?: true
    appointmentType?: true
    preferredDate?: true
    preferredTime?: true
    notes?: true
    vehicleId?: true
    configurationId?: true
    status?: true
    createdAt?: true
  }

  export type VIPBookingMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    contactMethod?: true
    appointmentType?: true
    preferredDate?: true
    preferredTime?: true
    notes?: true
    vehicleId?: true
    configurationId?: true
    status?: true
    createdAt?: true
  }

  export type VIPBookingCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    contactMethod?: true
    appointmentType?: true
    preferredDate?: true
    preferredTime?: true
    notes?: true
    vehicleId?: true
    configurationId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type VIPBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VIPBooking to aggregate.
     */
    where?: VIPBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VIPBookings to fetch.
     */
    orderBy?: VIPBookingOrderByWithRelationInput | VIPBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VIPBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VIPBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VIPBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VIPBookings
    **/
    _count?: true | VIPBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VIPBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VIPBookingMaxAggregateInputType
  }

  export type GetVIPBookingAggregateType<T extends VIPBookingAggregateArgs> = {
        [P in keyof T & keyof AggregateVIPBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVIPBooking[P]>
      : GetScalarType<T[P], AggregateVIPBooking[P]>
  }




  export type VIPBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VIPBookingWhereInput
    orderBy?: VIPBookingOrderByWithAggregationInput | VIPBookingOrderByWithAggregationInput[]
    by: VIPBookingScalarFieldEnum[] | VIPBookingScalarFieldEnum
    having?: VIPBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VIPBookingCountAggregateInputType | true
    _min?: VIPBookingMinAggregateInputType
    _max?: VIPBookingMaxAggregateInputType
  }

  export type VIPBookingGroupByOutputType = {
    id: string
    fullName: string
    email: string
    phone: string
    contactMethod: $Enums.ContactMethod
    appointmentType: $Enums.AppointmentType
    preferredDate: Date
    preferredTime: string
    notes: string | null
    vehicleId: string | null
    configurationId: string | null
    status: $Enums.BookingStatus
    createdAt: Date
    _count: VIPBookingCountAggregateOutputType | null
    _min: VIPBookingMinAggregateOutputType | null
    _max: VIPBookingMaxAggregateOutputType | null
  }

  type GetVIPBookingGroupByPayload<T extends VIPBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VIPBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VIPBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VIPBookingGroupByOutputType[P]>
            : GetScalarType<T[P], VIPBookingGroupByOutputType[P]>
        }
      >
    >


  export type VIPBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    contactMethod?: boolean
    appointmentType?: boolean
    preferredDate?: boolean
    preferredTime?: boolean
    notes?: boolean
    vehicleId?: boolean
    configurationId?: boolean
    status?: boolean
    createdAt?: boolean
    vehicle?: boolean | VIPBooking$vehicleArgs<ExtArgs>
    configuration?: boolean | VIPBooking$configurationArgs<ExtArgs>
  }, ExtArgs["result"]["vIPBooking"]>

  export type VIPBookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    contactMethod?: boolean
    appointmentType?: boolean
    preferredDate?: boolean
    preferredTime?: boolean
    notes?: boolean
    vehicleId?: boolean
    configurationId?: boolean
    status?: boolean
    createdAt?: boolean
    vehicle?: boolean | VIPBooking$vehicleArgs<ExtArgs>
    configuration?: boolean | VIPBooking$configurationArgs<ExtArgs>
  }, ExtArgs["result"]["vIPBooking"]>

  export type VIPBookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    contactMethod?: boolean
    appointmentType?: boolean
    preferredDate?: boolean
    preferredTime?: boolean
    notes?: boolean
    vehicleId?: boolean
    configurationId?: boolean
    status?: boolean
    createdAt?: boolean
    vehicle?: boolean | VIPBooking$vehicleArgs<ExtArgs>
    configuration?: boolean | VIPBooking$configurationArgs<ExtArgs>
  }, ExtArgs["result"]["vIPBooking"]>

  export type VIPBookingSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    contactMethod?: boolean
    appointmentType?: boolean
    preferredDate?: boolean
    preferredTime?: boolean
    notes?: boolean
    vehicleId?: boolean
    configurationId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type VIPBookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "phone" | "contactMethod" | "appointmentType" | "preferredDate" | "preferredTime" | "notes" | "vehicleId" | "configurationId" | "status" | "createdAt", ExtArgs["result"]["vIPBooking"]>
  export type VIPBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VIPBooking$vehicleArgs<ExtArgs>
    configuration?: boolean | VIPBooking$configurationArgs<ExtArgs>
  }
  export type VIPBookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VIPBooking$vehicleArgs<ExtArgs>
    configuration?: boolean | VIPBooking$configurationArgs<ExtArgs>
  }
  export type VIPBookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VIPBooking$vehicleArgs<ExtArgs>
    configuration?: boolean | VIPBooking$configurationArgs<ExtArgs>
  }

  export type $VIPBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VIPBooking"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs> | null
      configuration: Prisma.$VehicleConfigurationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      phone: string
      contactMethod: $Enums.ContactMethod
      appointmentType: $Enums.AppointmentType
      preferredDate: Date
      preferredTime: string
      notes: string | null
      vehicleId: string | null
      configurationId: string | null
      status: $Enums.BookingStatus
      createdAt: Date
    }, ExtArgs["result"]["vIPBooking"]>
    composites: {}
  }

  type VIPBookingGetPayload<S extends boolean | null | undefined | VIPBookingDefaultArgs> = $Result.GetResult<Prisma.$VIPBookingPayload, S>

  type VIPBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VIPBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VIPBookingCountAggregateInputType | true
    }

  export interface VIPBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VIPBooking'], meta: { name: 'VIPBooking' } }
    /**
     * Find zero or one VIPBooking that matches the filter.
     * @param {VIPBookingFindUniqueArgs} args - Arguments to find a VIPBooking
     * @example
     * // Get one VIPBooking
     * const vIPBooking = await prisma.vIPBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VIPBookingFindUniqueArgs>(args: SelectSubset<T, VIPBookingFindUniqueArgs<ExtArgs>>): Prisma__VIPBookingClient<$Result.GetResult<Prisma.$VIPBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VIPBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VIPBookingFindUniqueOrThrowArgs} args - Arguments to find a VIPBooking
     * @example
     * // Get one VIPBooking
     * const vIPBooking = await prisma.vIPBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VIPBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, VIPBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VIPBookingClient<$Result.GetResult<Prisma.$VIPBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VIPBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VIPBookingFindFirstArgs} args - Arguments to find a VIPBooking
     * @example
     * // Get one VIPBooking
     * const vIPBooking = await prisma.vIPBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VIPBookingFindFirstArgs>(args?: SelectSubset<T, VIPBookingFindFirstArgs<ExtArgs>>): Prisma__VIPBookingClient<$Result.GetResult<Prisma.$VIPBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VIPBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VIPBookingFindFirstOrThrowArgs} args - Arguments to find a VIPBooking
     * @example
     * // Get one VIPBooking
     * const vIPBooking = await prisma.vIPBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VIPBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, VIPBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__VIPBookingClient<$Result.GetResult<Prisma.$VIPBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VIPBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VIPBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VIPBookings
     * const vIPBookings = await prisma.vIPBooking.findMany()
     * 
     * // Get first 10 VIPBookings
     * const vIPBookings = await prisma.vIPBooking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vIPBookingWithIdOnly = await prisma.vIPBooking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VIPBookingFindManyArgs>(args?: SelectSubset<T, VIPBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VIPBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VIPBooking.
     * @param {VIPBookingCreateArgs} args - Arguments to create a VIPBooking.
     * @example
     * // Create one VIPBooking
     * const VIPBooking = await prisma.vIPBooking.create({
     *   data: {
     *     // ... data to create a VIPBooking
     *   }
     * })
     * 
     */
    create<T extends VIPBookingCreateArgs>(args: SelectSubset<T, VIPBookingCreateArgs<ExtArgs>>): Prisma__VIPBookingClient<$Result.GetResult<Prisma.$VIPBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VIPBookings.
     * @param {VIPBookingCreateManyArgs} args - Arguments to create many VIPBookings.
     * @example
     * // Create many VIPBookings
     * const vIPBooking = await prisma.vIPBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VIPBookingCreateManyArgs>(args?: SelectSubset<T, VIPBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VIPBookings and returns the data saved in the database.
     * @param {VIPBookingCreateManyAndReturnArgs} args - Arguments to create many VIPBookings.
     * @example
     * // Create many VIPBookings
     * const vIPBooking = await prisma.vIPBooking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VIPBookings and only return the `id`
     * const vIPBookingWithIdOnly = await prisma.vIPBooking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VIPBookingCreateManyAndReturnArgs>(args?: SelectSubset<T, VIPBookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VIPBookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VIPBooking.
     * @param {VIPBookingDeleteArgs} args - Arguments to delete one VIPBooking.
     * @example
     * // Delete one VIPBooking
     * const VIPBooking = await prisma.vIPBooking.delete({
     *   where: {
     *     // ... filter to delete one VIPBooking
     *   }
     * })
     * 
     */
    delete<T extends VIPBookingDeleteArgs>(args: SelectSubset<T, VIPBookingDeleteArgs<ExtArgs>>): Prisma__VIPBookingClient<$Result.GetResult<Prisma.$VIPBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VIPBooking.
     * @param {VIPBookingUpdateArgs} args - Arguments to update one VIPBooking.
     * @example
     * // Update one VIPBooking
     * const vIPBooking = await prisma.vIPBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VIPBookingUpdateArgs>(args: SelectSubset<T, VIPBookingUpdateArgs<ExtArgs>>): Prisma__VIPBookingClient<$Result.GetResult<Prisma.$VIPBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VIPBookings.
     * @param {VIPBookingDeleteManyArgs} args - Arguments to filter VIPBookings to delete.
     * @example
     * // Delete a few VIPBookings
     * const { count } = await prisma.vIPBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VIPBookingDeleteManyArgs>(args?: SelectSubset<T, VIPBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VIPBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VIPBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VIPBookings
     * const vIPBooking = await prisma.vIPBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VIPBookingUpdateManyArgs>(args: SelectSubset<T, VIPBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VIPBookings and returns the data updated in the database.
     * @param {VIPBookingUpdateManyAndReturnArgs} args - Arguments to update many VIPBookings.
     * @example
     * // Update many VIPBookings
     * const vIPBooking = await prisma.vIPBooking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VIPBookings and only return the `id`
     * const vIPBookingWithIdOnly = await prisma.vIPBooking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VIPBookingUpdateManyAndReturnArgs>(args: SelectSubset<T, VIPBookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VIPBookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VIPBooking.
     * @param {VIPBookingUpsertArgs} args - Arguments to update or create a VIPBooking.
     * @example
     * // Update or create a VIPBooking
     * const vIPBooking = await prisma.vIPBooking.upsert({
     *   create: {
     *     // ... data to create a VIPBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VIPBooking we want to update
     *   }
     * })
     */
    upsert<T extends VIPBookingUpsertArgs>(args: SelectSubset<T, VIPBookingUpsertArgs<ExtArgs>>): Prisma__VIPBookingClient<$Result.GetResult<Prisma.$VIPBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VIPBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VIPBookingCountArgs} args - Arguments to filter VIPBookings to count.
     * @example
     * // Count the number of VIPBookings
     * const count = await prisma.vIPBooking.count({
     *   where: {
     *     // ... the filter for the VIPBookings we want to count
     *   }
     * })
    **/
    count<T extends VIPBookingCountArgs>(
      args?: Subset<T, VIPBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VIPBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VIPBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VIPBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VIPBookingAggregateArgs>(args: Subset<T, VIPBookingAggregateArgs>): Prisma.PrismaPromise<GetVIPBookingAggregateType<T>>

    /**
     * Group by VIPBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VIPBookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VIPBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VIPBookingGroupByArgs['orderBy'] }
        : { orderBy?: VIPBookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VIPBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVIPBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VIPBooking model
   */
  readonly fields: VIPBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VIPBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VIPBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VIPBooking$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, VIPBooking$vehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    configuration<T extends VIPBooking$configurationArgs<ExtArgs> = {}>(args?: Subset<T, VIPBooking$configurationArgs<ExtArgs>>): Prisma__VehicleConfigurationClient<$Result.GetResult<Prisma.$VehicleConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VIPBooking model
   */
  interface VIPBookingFieldRefs {
    readonly id: FieldRef<"VIPBooking", 'String'>
    readonly fullName: FieldRef<"VIPBooking", 'String'>
    readonly email: FieldRef<"VIPBooking", 'String'>
    readonly phone: FieldRef<"VIPBooking", 'String'>
    readonly contactMethod: FieldRef<"VIPBooking", 'ContactMethod'>
    readonly appointmentType: FieldRef<"VIPBooking", 'AppointmentType'>
    readonly preferredDate: FieldRef<"VIPBooking", 'DateTime'>
    readonly preferredTime: FieldRef<"VIPBooking", 'String'>
    readonly notes: FieldRef<"VIPBooking", 'String'>
    readonly vehicleId: FieldRef<"VIPBooking", 'String'>
    readonly configurationId: FieldRef<"VIPBooking", 'String'>
    readonly status: FieldRef<"VIPBooking", 'BookingStatus'>
    readonly createdAt: FieldRef<"VIPBooking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VIPBooking findUnique
   */
  export type VIPBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VIPBooking
     */
    select?: VIPBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VIPBooking
     */
    omit?: VIPBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VIPBookingInclude<ExtArgs> | null
    /**
     * Filter, which VIPBooking to fetch.
     */
    where: VIPBookingWhereUniqueInput
  }

  /**
   * VIPBooking findUniqueOrThrow
   */
  export type VIPBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VIPBooking
     */
    select?: VIPBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VIPBooking
     */
    omit?: VIPBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VIPBookingInclude<ExtArgs> | null
    /**
     * Filter, which VIPBooking to fetch.
     */
    where: VIPBookingWhereUniqueInput
  }

  /**
   * VIPBooking findFirst
   */
  export type VIPBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VIPBooking
     */
    select?: VIPBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VIPBooking
     */
    omit?: VIPBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VIPBookingInclude<ExtArgs> | null
    /**
     * Filter, which VIPBooking to fetch.
     */
    where?: VIPBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VIPBookings to fetch.
     */
    orderBy?: VIPBookingOrderByWithRelationInput | VIPBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VIPBookings.
     */
    cursor?: VIPBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VIPBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VIPBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VIPBookings.
     */
    distinct?: VIPBookingScalarFieldEnum | VIPBookingScalarFieldEnum[]
  }

  /**
   * VIPBooking findFirstOrThrow
   */
  export type VIPBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VIPBooking
     */
    select?: VIPBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VIPBooking
     */
    omit?: VIPBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VIPBookingInclude<ExtArgs> | null
    /**
     * Filter, which VIPBooking to fetch.
     */
    where?: VIPBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VIPBookings to fetch.
     */
    orderBy?: VIPBookingOrderByWithRelationInput | VIPBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VIPBookings.
     */
    cursor?: VIPBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VIPBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VIPBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VIPBookings.
     */
    distinct?: VIPBookingScalarFieldEnum | VIPBookingScalarFieldEnum[]
  }

  /**
   * VIPBooking findMany
   */
  export type VIPBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VIPBooking
     */
    select?: VIPBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VIPBooking
     */
    omit?: VIPBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VIPBookingInclude<ExtArgs> | null
    /**
     * Filter, which VIPBookings to fetch.
     */
    where?: VIPBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VIPBookings to fetch.
     */
    orderBy?: VIPBookingOrderByWithRelationInput | VIPBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VIPBookings.
     */
    cursor?: VIPBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VIPBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VIPBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VIPBookings.
     */
    distinct?: VIPBookingScalarFieldEnum | VIPBookingScalarFieldEnum[]
  }

  /**
   * VIPBooking create
   */
  export type VIPBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VIPBooking
     */
    select?: VIPBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VIPBooking
     */
    omit?: VIPBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VIPBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a VIPBooking.
     */
    data: XOR<VIPBookingCreateInput, VIPBookingUncheckedCreateInput>
  }

  /**
   * VIPBooking createMany
   */
  export type VIPBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VIPBookings.
     */
    data: VIPBookingCreateManyInput | VIPBookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VIPBooking createManyAndReturn
   */
  export type VIPBookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VIPBooking
     */
    select?: VIPBookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VIPBooking
     */
    omit?: VIPBookingOmit<ExtArgs> | null
    /**
     * The data used to create many VIPBookings.
     */
    data: VIPBookingCreateManyInput | VIPBookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VIPBookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VIPBooking update
   */
  export type VIPBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VIPBooking
     */
    select?: VIPBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VIPBooking
     */
    omit?: VIPBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VIPBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a VIPBooking.
     */
    data: XOR<VIPBookingUpdateInput, VIPBookingUncheckedUpdateInput>
    /**
     * Choose, which VIPBooking to update.
     */
    where: VIPBookingWhereUniqueInput
  }

  /**
   * VIPBooking updateMany
   */
  export type VIPBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VIPBookings.
     */
    data: XOR<VIPBookingUpdateManyMutationInput, VIPBookingUncheckedUpdateManyInput>
    /**
     * Filter which VIPBookings to update
     */
    where?: VIPBookingWhereInput
    /**
     * Limit how many VIPBookings to update.
     */
    limit?: number
  }

  /**
   * VIPBooking updateManyAndReturn
   */
  export type VIPBookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VIPBooking
     */
    select?: VIPBookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VIPBooking
     */
    omit?: VIPBookingOmit<ExtArgs> | null
    /**
     * The data used to update VIPBookings.
     */
    data: XOR<VIPBookingUpdateManyMutationInput, VIPBookingUncheckedUpdateManyInput>
    /**
     * Filter which VIPBookings to update
     */
    where?: VIPBookingWhereInput
    /**
     * Limit how many VIPBookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VIPBookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VIPBooking upsert
   */
  export type VIPBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VIPBooking
     */
    select?: VIPBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VIPBooking
     */
    omit?: VIPBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VIPBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the VIPBooking to update in case it exists.
     */
    where: VIPBookingWhereUniqueInput
    /**
     * In case the VIPBooking found by the `where` argument doesn't exist, create a new VIPBooking with this data.
     */
    create: XOR<VIPBookingCreateInput, VIPBookingUncheckedCreateInput>
    /**
     * In case the VIPBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VIPBookingUpdateInput, VIPBookingUncheckedUpdateInput>
  }

  /**
   * VIPBooking delete
   */
  export type VIPBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VIPBooking
     */
    select?: VIPBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VIPBooking
     */
    omit?: VIPBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VIPBookingInclude<ExtArgs> | null
    /**
     * Filter which VIPBooking to delete.
     */
    where: VIPBookingWhereUniqueInput
  }

  /**
   * VIPBooking deleteMany
   */
  export type VIPBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VIPBookings to delete
     */
    where?: VIPBookingWhereInput
    /**
     * Limit how many VIPBookings to delete.
     */
    limit?: number
  }

  /**
   * VIPBooking.vehicle
   */
  export type VIPBooking$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * VIPBooking.configuration
   */
  export type VIPBooking$configurationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleConfiguration
     */
    select?: VehicleConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleConfiguration
     */
    omit?: VehicleConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleConfigurationInclude<ExtArgs> | null
    where?: VehicleConfigurationWhereInput
  }

  /**
   * VIPBooking without action
   */
  export type VIPBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VIPBooking
     */
    select?: VIPBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VIPBooking
     */
    omit?: VIPBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VIPBookingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    brand: 'brand',
    model: 'model',
    category: 'category',
    horsepower: 'horsepower',
    torqueNm: 'torqueNm',
    zeroToHundred: 'zeroToHundred',
    topSpeedKmh: 'topSpeedKmh',
    rangeKm: 'rangeKm',
    consumption: 'consumption',
    basePriceChf: 'basePriceChf',
    available: 'available',
    heroImage: 'heroImage',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const OptionCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type OptionCategoryScalarFieldEnum = (typeof OptionCategoryScalarFieldEnum)[keyof typeof OptionCategoryScalarFieldEnum]


  export const OptionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    priceChf: 'priceChf',
    hexColor: 'hexColor',
    categoryId: 'categoryId'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


  export const VehicleConfigurationScalarFieldEnum: {
    id: 'id',
    hashId: 'hashId',
    vehicleId: 'vehicleId',
    totalPriceChf: 'totalPriceChf',
    monthlyLeaseChf: 'monthlyLeaseChf',
    createdAt: 'createdAt'
  };

  export type VehicleConfigurationScalarFieldEnum = (typeof VehicleConfigurationScalarFieldEnum)[keyof typeof VehicleConfigurationScalarFieldEnum]


  export const VehicleConfigurationOptionScalarFieldEnum: {
    id: 'id',
    configurationId: 'configurationId',
    optionId: 'optionId'
  };

  export type VehicleConfigurationOptionScalarFieldEnum = (typeof VehicleConfigurationOptionScalarFieldEnum)[keyof typeof VehicleConfigurationOptionScalarFieldEnum]


  export const VIPBookingScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    contactMethod: 'contactMethod',
    appointmentType: 'appointmentType',
    preferredDate: 'preferredDate',
    preferredTime: 'preferredTime',
    notes: 'notes',
    vehicleId: 'vehicleId',
    configurationId: 'configurationId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type VIPBookingScalarFieldEnum = (typeof VIPBookingScalarFieldEnum)[keyof typeof VIPBookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'VehicleCategory'
   */
  export type EnumVehicleCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleCategory'>
    


  /**
   * Reference to a field of type 'VehicleCategory[]'
   */
  export type ListEnumVehicleCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleCategory[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ContactMethod'
   */
  export type EnumContactMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactMethod'>
    


  /**
   * Reference to a field of type 'ContactMethod[]'
   */
  export type ListEnumContactMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactMethod[]'>
    


  /**
   * Reference to a field of type 'AppointmentType'
   */
  export type EnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType'>
    


  /**
   * Reference to a field of type 'AppointmentType[]'
   */
  export type ListEnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    slug?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    category?: EnumVehicleCategoryFilter<"Vehicle"> | $Enums.VehicleCategory
    horsepower?: IntFilter<"Vehicle"> | number
    torqueNm?: IntFilter<"Vehicle"> | number
    zeroToHundred?: FloatFilter<"Vehicle"> | number
    topSpeedKmh?: IntFilter<"Vehicle"> | number
    rangeKm?: IntNullableFilter<"Vehicle"> | number | null
    consumption?: StringNullableFilter<"Vehicle"> | string | null
    basePriceChf?: IntFilter<"Vehicle"> | number
    available?: BoolFilter<"Vehicle"> | boolean
    heroImage?: StringFilter<"Vehicle"> | string
    description?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    configurations?: VehicleConfigurationListRelationFilter
    bookings?: VIPBookingListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category?: SortOrder
    horsepower?: SortOrder
    torqueNm?: SortOrder
    zeroToHundred?: SortOrder
    topSpeedKmh?: SortOrder
    rangeKm?: SortOrderInput | SortOrder
    consumption?: SortOrderInput | SortOrder
    basePriceChf?: SortOrder
    available?: SortOrder
    heroImage?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    configurations?: VehicleConfigurationOrderByRelationAggregateInput
    bookings?: VIPBookingOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    brand?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    category?: EnumVehicleCategoryFilter<"Vehicle"> | $Enums.VehicleCategory
    horsepower?: IntFilter<"Vehicle"> | number
    torqueNm?: IntFilter<"Vehicle"> | number
    zeroToHundred?: FloatFilter<"Vehicle"> | number
    topSpeedKmh?: IntFilter<"Vehicle"> | number
    rangeKm?: IntNullableFilter<"Vehicle"> | number | null
    consumption?: StringNullableFilter<"Vehicle"> | string | null
    basePriceChf?: IntFilter<"Vehicle"> | number
    available?: BoolFilter<"Vehicle"> | boolean
    heroImage?: StringFilter<"Vehicle"> | string
    description?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    configurations?: VehicleConfigurationListRelationFilter
    bookings?: VIPBookingListRelationFilter
  }, "id" | "slug">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category?: SortOrder
    horsepower?: SortOrder
    torqueNm?: SortOrder
    zeroToHundred?: SortOrder
    topSpeedKmh?: SortOrder
    rangeKm?: SortOrderInput | SortOrder
    consumption?: SortOrderInput | SortOrder
    basePriceChf?: SortOrder
    available?: SortOrder
    heroImage?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    slug?: StringWithAggregatesFilter<"Vehicle"> | string
    brand?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    category?: EnumVehicleCategoryWithAggregatesFilter<"Vehicle"> | $Enums.VehicleCategory
    horsepower?: IntWithAggregatesFilter<"Vehicle"> | number
    torqueNm?: IntWithAggregatesFilter<"Vehicle"> | number
    zeroToHundred?: FloatWithAggregatesFilter<"Vehicle"> | number
    topSpeedKmh?: IntWithAggregatesFilter<"Vehicle"> | number
    rangeKm?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    consumption?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    basePriceChf?: IntWithAggregatesFilter<"Vehicle"> | number
    available?: BoolWithAggregatesFilter<"Vehicle"> | boolean
    heroImage?: StringWithAggregatesFilter<"Vehicle"> | string
    description?: StringWithAggregatesFilter<"Vehicle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type OptionCategoryWhereInput = {
    AND?: OptionCategoryWhereInput | OptionCategoryWhereInput[]
    OR?: OptionCategoryWhereInput[]
    NOT?: OptionCategoryWhereInput | OptionCategoryWhereInput[]
    id?: StringFilter<"OptionCategory"> | string
    name?: StringFilter<"OptionCategory"> | string
    slug?: StringFilter<"OptionCategory"> | string
    options?: OptionListRelationFilter
  }

  export type OptionCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    options?: OptionOrderByRelationAggregateInput
  }

  export type OptionCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: OptionCategoryWhereInput | OptionCategoryWhereInput[]
    OR?: OptionCategoryWhereInput[]
    NOT?: OptionCategoryWhereInput | OptionCategoryWhereInput[]
    name?: StringFilter<"OptionCategory"> | string
    options?: OptionListRelationFilter
  }, "id" | "slug">

  export type OptionCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: OptionCategoryCountOrderByAggregateInput
    _max?: OptionCategoryMaxOrderByAggregateInput
    _min?: OptionCategoryMinOrderByAggregateInput
  }

  export type OptionCategoryScalarWhereWithAggregatesInput = {
    AND?: OptionCategoryScalarWhereWithAggregatesInput | OptionCategoryScalarWhereWithAggregatesInput[]
    OR?: OptionCategoryScalarWhereWithAggregatesInput[]
    NOT?: OptionCategoryScalarWhereWithAggregatesInput | OptionCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OptionCategory"> | string
    name?: StringWithAggregatesFilter<"OptionCategory"> | string
    slug?: StringWithAggregatesFilter<"OptionCategory"> | string
  }

  export type OptionWhereInput = {
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    id?: StringFilter<"Option"> | string
    name?: StringFilter<"Option"> | string
    slug?: StringFilter<"Option"> | string
    priceChf?: IntFilter<"Option"> | number
    hexColor?: StringNullableFilter<"Option"> | string | null
    categoryId?: StringFilter<"Option"> | string
    category?: XOR<OptionCategoryScalarRelationFilter, OptionCategoryWhereInput>
    configurations?: VehicleConfigurationOptionListRelationFilter
  }

  export type OptionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    priceChf?: SortOrder
    hexColor?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    category?: OptionCategoryOrderByWithRelationInput
    configurations?: VehicleConfigurationOptionOrderByRelationAggregateInput
  }

  export type OptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    categoryId_slug?: OptionCategoryIdSlugCompoundUniqueInput
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    name?: StringFilter<"Option"> | string
    slug?: StringFilter<"Option"> | string
    priceChf?: IntFilter<"Option"> | number
    hexColor?: StringNullableFilter<"Option"> | string | null
    categoryId?: StringFilter<"Option"> | string
    category?: XOR<OptionCategoryScalarRelationFilter, OptionCategoryWhereInput>
    configurations?: VehicleConfigurationOptionListRelationFilter
  }, "id" | "categoryId_slug">

  export type OptionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    priceChf?: SortOrder
    hexColor?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    _count?: OptionCountOrderByAggregateInput
    _avg?: OptionAvgOrderByAggregateInput
    _max?: OptionMaxOrderByAggregateInput
    _min?: OptionMinOrderByAggregateInput
    _sum?: OptionSumOrderByAggregateInput
  }

  export type OptionScalarWhereWithAggregatesInput = {
    AND?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    OR?: OptionScalarWhereWithAggregatesInput[]
    NOT?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Option"> | string
    name?: StringWithAggregatesFilter<"Option"> | string
    slug?: StringWithAggregatesFilter<"Option"> | string
    priceChf?: IntWithAggregatesFilter<"Option"> | number
    hexColor?: StringNullableWithAggregatesFilter<"Option"> | string | null
    categoryId?: StringWithAggregatesFilter<"Option"> | string
  }

  export type VehicleConfigurationWhereInput = {
    AND?: VehicleConfigurationWhereInput | VehicleConfigurationWhereInput[]
    OR?: VehicleConfigurationWhereInput[]
    NOT?: VehicleConfigurationWhereInput | VehicleConfigurationWhereInput[]
    id?: StringFilter<"VehicleConfiguration"> | string
    hashId?: StringFilter<"VehicleConfiguration"> | string
    vehicleId?: StringFilter<"VehicleConfiguration"> | string
    totalPriceChf?: IntFilter<"VehicleConfiguration"> | number
    monthlyLeaseChf?: IntFilter<"VehicleConfiguration"> | number
    createdAt?: DateTimeFilter<"VehicleConfiguration"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    options?: VehicleConfigurationOptionListRelationFilter
    bookings?: VIPBookingListRelationFilter
  }

  export type VehicleConfigurationOrderByWithRelationInput = {
    id?: SortOrder
    hashId?: SortOrder
    vehicleId?: SortOrder
    totalPriceChf?: SortOrder
    monthlyLeaseChf?: SortOrder
    createdAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    options?: VehicleConfigurationOptionOrderByRelationAggregateInput
    bookings?: VIPBookingOrderByRelationAggregateInput
  }

  export type VehicleConfigurationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hashId?: string
    AND?: VehicleConfigurationWhereInput | VehicleConfigurationWhereInput[]
    OR?: VehicleConfigurationWhereInput[]
    NOT?: VehicleConfigurationWhereInput | VehicleConfigurationWhereInput[]
    vehicleId?: StringFilter<"VehicleConfiguration"> | string
    totalPriceChf?: IntFilter<"VehicleConfiguration"> | number
    monthlyLeaseChf?: IntFilter<"VehicleConfiguration"> | number
    createdAt?: DateTimeFilter<"VehicleConfiguration"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    options?: VehicleConfigurationOptionListRelationFilter
    bookings?: VIPBookingListRelationFilter
  }, "id" | "hashId">

  export type VehicleConfigurationOrderByWithAggregationInput = {
    id?: SortOrder
    hashId?: SortOrder
    vehicleId?: SortOrder
    totalPriceChf?: SortOrder
    monthlyLeaseChf?: SortOrder
    createdAt?: SortOrder
    _count?: VehicleConfigurationCountOrderByAggregateInput
    _avg?: VehicleConfigurationAvgOrderByAggregateInput
    _max?: VehicleConfigurationMaxOrderByAggregateInput
    _min?: VehicleConfigurationMinOrderByAggregateInput
    _sum?: VehicleConfigurationSumOrderByAggregateInput
  }

  export type VehicleConfigurationScalarWhereWithAggregatesInput = {
    AND?: VehicleConfigurationScalarWhereWithAggregatesInput | VehicleConfigurationScalarWhereWithAggregatesInput[]
    OR?: VehicleConfigurationScalarWhereWithAggregatesInput[]
    NOT?: VehicleConfigurationScalarWhereWithAggregatesInput | VehicleConfigurationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VehicleConfiguration"> | string
    hashId?: StringWithAggregatesFilter<"VehicleConfiguration"> | string
    vehicleId?: StringWithAggregatesFilter<"VehicleConfiguration"> | string
    totalPriceChf?: IntWithAggregatesFilter<"VehicleConfiguration"> | number
    monthlyLeaseChf?: IntWithAggregatesFilter<"VehicleConfiguration"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VehicleConfiguration"> | Date | string
  }

  export type VehicleConfigurationOptionWhereInput = {
    AND?: VehicleConfigurationOptionWhereInput | VehicleConfigurationOptionWhereInput[]
    OR?: VehicleConfigurationOptionWhereInput[]
    NOT?: VehicleConfigurationOptionWhereInput | VehicleConfigurationOptionWhereInput[]
    id?: StringFilter<"VehicleConfigurationOption"> | string
    configurationId?: StringFilter<"VehicleConfigurationOption"> | string
    optionId?: StringFilter<"VehicleConfigurationOption"> | string
    configuration?: XOR<VehicleConfigurationScalarRelationFilter, VehicleConfigurationWhereInput>
    option?: XOR<OptionScalarRelationFilter, OptionWhereInput>
  }

  export type VehicleConfigurationOptionOrderByWithRelationInput = {
    id?: SortOrder
    configurationId?: SortOrder
    optionId?: SortOrder
    configuration?: VehicleConfigurationOrderByWithRelationInput
    option?: OptionOrderByWithRelationInput
  }

  export type VehicleConfigurationOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    configurationId_optionId?: VehicleConfigurationOptionConfigurationIdOptionIdCompoundUniqueInput
    AND?: VehicleConfigurationOptionWhereInput | VehicleConfigurationOptionWhereInput[]
    OR?: VehicleConfigurationOptionWhereInput[]
    NOT?: VehicleConfigurationOptionWhereInput | VehicleConfigurationOptionWhereInput[]
    configurationId?: StringFilter<"VehicleConfigurationOption"> | string
    optionId?: StringFilter<"VehicleConfigurationOption"> | string
    configuration?: XOR<VehicleConfigurationScalarRelationFilter, VehicleConfigurationWhereInput>
    option?: XOR<OptionScalarRelationFilter, OptionWhereInput>
  }, "id" | "configurationId_optionId">

  export type VehicleConfigurationOptionOrderByWithAggregationInput = {
    id?: SortOrder
    configurationId?: SortOrder
    optionId?: SortOrder
    _count?: VehicleConfigurationOptionCountOrderByAggregateInput
    _max?: VehicleConfigurationOptionMaxOrderByAggregateInput
    _min?: VehicleConfigurationOptionMinOrderByAggregateInput
  }

  export type VehicleConfigurationOptionScalarWhereWithAggregatesInput = {
    AND?: VehicleConfigurationOptionScalarWhereWithAggregatesInput | VehicleConfigurationOptionScalarWhereWithAggregatesInput[]
    OR?: VehicleConfigurationOptionScalarWhereWithAggregatesInput[]
    NOT?: VehicleConfigurationOptionScalarWhereWithAggregatesInput | VehicleConfigurationOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VehicleConfigurationOption"> | string
    configurationId?: StringWithAggregatesFilter<"VehicleConfigurationOption"> | string
    optionId?: StringWithAggregatesFilter<"VehicleConfigurationOption"> | string
  }

  export type VIPBookingWhereInput = {
    AND?: VIPBookingWhereInput | VIPBookingWhereInput[]
    OR?: VIPBookingWhereInput[]
    NOT?: VIPBookingWhereInput | VIPBookingWhereInput[]
    id?: StringFilter<"VIPBooking"> | string
    fullName?: StringFilter<"VIPBooking"> | string
    email?: StringFilter<"VIPBooking"> | string
    phone?: StringFilter<"VIPBooking"> | string
    contactMethod?: EnumContactMethodFilter<"VIPBooking"> | $Enums.ContactMethod
    appointmentType?: EnumAppointmentTypeFilter<"VIPBooking"> | $Enums.AppointmentType
    preferredDate?: DateTimeFilter<"VIPBooking"> | Date | string
    preferredTime?: StringFilter<"VIPBooking"> | string
    notes?: StringNullableFilter<"VIPBooking"> | string | null
    vehicleId?: StringNullableFilter<"VIPBooking"> | string | null
    configurationId?: StringNullableFilter<"VIPBooking"> | string | null
    status?: EnumBookingStatusFilter<"VIPBooking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"VIPBooking"> | Date | string
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    configuration?: XOR<VehicleConfigurationNullableScalarRelationFilter, VehicleConfigurationWhereInput> | null
  }

  export type VIPBookingOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    contactMethod?: SortOrder
    appointmentType?: SortOrder
    preferredDate?: SortOrder
    preferredTime?: SortOrder
    notes?: SortOrderInput | SortOrder
    vehicleId?: SortOrderInput | SortOrder
    configurationId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    configuration?: VehicleConfigurationOrderByWithRelationInput
  }

  export type VIPBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VIPBookingWhereInput | VIPBookingWhereInput[]
    OR?: VIPBookingWhereInput[]
    NOT?: VIPBookingWhereInput | VIPBookingWhereInput[]
    fullName?: StringFilter<"VIPBooking"> | string
    email?: StringFilter<"VIPBooking"> | string
    phone?: StringFilter<"VIPBooking"> | string
    contactMethod?: EnumContactMethodFilter<"VIPBooking"> | $Enums.ContactMethod
    appointmentType?: EnumAppointmentTypeFilter<"VIPBooking"> | $Enums.AppointmentType
    preferredDate?: DateTimeFilter<"VIPBooking"> | Date | string
    preferredTime?: StringFilter<"VIPBooking"> | string
    notes?: StringNullableFilter<"VIPBooking"> | string | null
    vehicleId?: StringNullableFilter<"VIPBooking"> | string | null
    configurationId?: StringNullableFilter<"VIPBooking"> | string | null
    status?: EnumBookingStatusFilter<"VIPBooking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"VIPBooking"> | Date | string
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    configuration?: XOR<VehicleConfigurationNullableScalarRelationFilter, VehicleConfigurationWhereInput> | null
  }, "id">

  export type VIPBookingOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    contactMethod?: SortOrder
    appointmentType?: SortOrder
    preferredDate?: SortOrder
    preferredTime?: SortOrder
    notes?: SortOrderInput | SortOrder
    vehicleId?: SortOrderInput | SortOrder
    configurationId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: VIPBookingCountOrderByAggregateInput
    _max?: VIPBookingMaxOrderByAggregateInput
    _min?: VIPBookingMinOrderByAggregateInput
  }

  export type VIPBookingScalarWhereWithAggregatesInput = {
    AND?: VIPBookingScalarWhereWithAggregatesInput | VIPBookingScalarWhereWithAggregatesInput[]
    OR?: VIPBookingScalarWhereWithAggregatesInput[]
    NOT?: VIPBookingScalarWhereWithAggregatesInput | VIPBookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VIPBooking"> | string
    fullName?: StringWithAggregatesFilter<"VIPBooking"> | string
    email?: StringWithAggregatesFilter<"VIPBooking"> | string
    phone?: StringWithAggregatesFilter<"VIPBooking"> | string
    contactMethod?: EnumContactMethodWithAggregatesFilter<"VIPBooking"> | $Enums.ContactMethod
    appointmentType?: EnumAppointmentTypeWithAggregatesFilter<"VIPBooking"> | $Enums.AppointmentType
    preferredDate?: DateTimeWithAggregatesFilter<"VIPBooking"> | Date | string
    preferredTime?: StringWithAggregatesFilter<"VIPBooking"> | string
    notes?: StringNullableWithAggregatesFilter<"VIPBooking"> | string | null
    vehicleId?: StringNullableWithAggregatesFilter<"VIPBooking"> | string | null
    configurationId?: StringNullableWithAggregatesFilter<"VIPBooking"> | string | null
    status?: EnumBookingStatusWithAggregatesFilter<"VIPBooking"> | $Enums.BookingStatus
    createdAt?: DateTimeWithAggregatesFilter<"VIPBooking"> | Date | string
  }

  export type VehicleCreateInput = {
    id?: string
    slug: string
    brand: string
    model: string
    category: $Enums.VehicleCategory
    horsepower: number
    torqueNm: number
    zeroToHundred: number
    topSpeedKmh: number
    rangeKm?: number | null
    consumption?: string | null
    basePriceChf: number
    available?: boolean
    heroImage: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configurations?: VehicleConfigurationCreateNestedManyWithoutVehicleInput
    bookings?: VIPBookingCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    slug: string
    brand: string
    model: string
    category: $Enums.VehicleCategory
    horsepower: number
    torqueNm: number
    zeroToHundred: number
    topSpeedKmh: number
    rangeKm?: number | null
    consumption?: string | null
    basePriceChf: number
    available?: boolean
    heroImage: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configurations?: VehicleConfigurationUncheckedCreateNestedManyWithoutVehicleInput
    bookings?: VIPBookingUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    category?: EnumVehicleCategoryFieldUpdateOperationsInput | $Enums.VehicleCategory
    horsepower?: IntFieldUpdateOperationsInput | number
    torqueNm?: IntFieldUpdateOperationsInput | number
    zeroToHundred?: FloatFieldUpdateOperationsInput | number
    topSpeedKmh?: IntFieldUpdateOperationsInput | number
    rangeKm?: NullableIntFieldUpdateOperationsInput | number | null
    consumption?: NullableStringFieldUpdateOperationsInput | string | null
    basePriceChf?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    heroImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configurations?: VehicleConfigurationUpdateManyWithoutVehicleNestedInput
    bookings?: VIPBookingUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    category?: EnumVehicleCategoryFieldUpdateOperationsInput | $Enums.VehicleCategory
    horsepower?: IntFieldUpdateOperationsInput | number
    torqueNm?: IntFieldUpdateOperationsInput | number
    zeroToHundred?: FloatFieldUpdateOperationsInput | number
    topSpeedKmh?: IntFieldUpdateOperationsInput | number
    rangeKm?: NullableIntFieldUpdateOperationsInput | number | null
    consumption?: NullableStringFieldUpdateOperationsInput | string | null
    basePriceChf?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    heroImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configurations?: VehicleConfigurationUncheckedUpdateManyWithoutVehicleNestedInput
    bookings?: VIPBookingUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    slug: string
    brand: string
    model: string
    category: $Enums.VehicleCategory
    horsepower: number
    torqueNm: number
    zeroToHundred: number
    topSpeedKmh: number
    rangeKm?: number | null
    consumption?: string | null
    basePriceChf: number
    available?: boolean
    heroImage: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    category?: EnumVehicleCategoryFieldUpdateOperationsInput | $Enums.VehicleCategory
    horsepower?: IntFieldUpdateOperationsInput | number
    torqueNm?: IntFieldUpdateOperationsInput | number
    zeroToHundred?: FloatFieldUpdateOperationsInput | number
    topSpeedKmh?: IntFieldUpdateOperationsInput | number
    rangeKm?: NullableIntFieldUpdateOperationsInput | number | null
    consumption?: NullableStringFieldUpdateOperationsInput | string | null
    basePriceChf?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    heroImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    category?: EnumVehicleCategoryFieldUpdateOperationsInput | $Enums.VehicleCategory
    horsepower?: IntFieldUpdateOperationsInput | number
    torqueNm?: IntFieldUpdateOperationsInput | number
    zeroToHundred?: FloatFieldUpdateOperationsInput | number
    topSpeedKmh?: IntFieldUpdateOperationsInput | number
    rangeKm?: NullableIntFieldUpdateOperationsInput | number | null
    consumption?: NullableStringFieldUpdateOperationsInput | string | null
    basePriceChf?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    heroImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionCategoryCreateInput = {
    id?: string
    name: string
    slug: string
    options?: OptionCreateNestedManyWithoutCategoryInput
  }

  export type OptionCategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    options?: OptionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type OptionCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    options?: OptionUpdateManyWithoutCategoryNestedInput
  }

  export type OptionCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    options?: OptionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type OptionCategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
  }

  export type OptionCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type OptionCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type OptionCreateInput = {
    id?: string
    name: string
    slug: string
    priceChf: number
    hexColor?: string | null
    category: OptionCategoryCreateNestedOneWithoutOptionsInput
    configurations?: VehicleConfigurationOptionCreateNestedManyWithoutOptionInput
  }

  export type OptionUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    priceChf: number
    hexColor?: string | null
    categoryId: string
    configurations?: VehicleConfigurationOptionUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceChf?: IntFieldUpdateOperationsInput | number
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    category?: OptionCategoryUpdateOneRequiredWithoutOptionsNestedInput
    configurations?: VehicleConfigurationOptionUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceChf?: IntFieldUpdateOperationsInput | number
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    configurations?: VehicleConfigurationOptionUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type OptionCreateManyInput = {
    id?: string
    name: string
    slug: string
    priceChf: number
    hexColor?: string | null
    categoryId: string
  }

  export type OptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceChf?: IntFieldUpdateOperationsInput | number
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceChf?: IntFieldUpdateOperationsInput | number
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleConfigurationCreateInput = {
    id?: string
    hashId: string
    totalPriceChf: number
    monthlyLeaseChf: number
    createdAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutConfigurationsInput
    options?: VehicleConfigurationOptionCreateNestedManyWithoutConfigurationInput
    bookings?: VIPBookingCreateNestedManyWithoutConfigurationInput
  }

  export type VehicleConfigurationUncheckedCreateInput = {
    id?: string
    hashId: string
    vehicleId: string
    totalPriceChf: number
    monthlyLeaseChf: number
    createdAt?: Date | string
    options?: VehicleConfigurationOptionUncheckedCreateNestedManyWithoutConfigurationInput
    bookings?: VIPBookingUncheckedCreateNestedManyWithoutConfigurationInput
  }

  export type VehicleConfigurationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashId?: StringFieldUpdateOperationsInput | string
    totalPriceChf?: IntFieldUpdateOperationsInput | number
    monthlyLeaseChf?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutConfigurationsNestedInput
    options?: VehicleConfigurationOptionUpdateManyWithoutConfigurationNestedInput
    bookings?: VIPBookingUpdateManyWithoutConfigurationNestedInput
  }

  export type VehicleConfigurationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    totalPriceChf?: IntFieldUpdateOperationsInput | number
    monthlyLeaseChf?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: VehicleConfigurationOptionUncheckedUpdateManyWithoutConfigurationNestedInput
    bookings?: VIPBookingUncheckedUpdateManyWithoutConfigurationNestedInput
  }

  export type VehicleConfigurationCreateManyInput = {
    id?: string
    hashId: string
    vehicleId: string
    totalPriceChf: number
    monthlyLeaseChf: number
    createdAt?: Date | string
  }

  export type VehicleConfigurationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashId?: StringFieldUpdateOperationsInput | string
    totalPriceChf?: IntFieldUpdateOperationsInput | number
    monthlyLeaseChf?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleConfigurationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    totalPriceChf?: IntFieldUpdateOperationsInput | number
    monthlyLeaseChf?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleConfigurationOptionCreateInput = {
    id?: string
    configuration: VehicleConfigurationCreateNestedOneWithoutOptionsInput
    option: OptionCreateNestedOneWithoutConfigurationsInput
  }

  export type VehicleConfigurationOptionUncheckedCreateInput = {
    id?: string
    configurationId: string
    optionId: string
  }

  export type VehicleConfigurationOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    configuration?: VehicleConfigurationUpdateOneRequiredWithoutOptionsNestedInput
    option?: OptionUpdateOneRequiredWithoutConfigurationsNestedInput
  }

  export type VehicleConfigurationOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    configurationId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleConfigurationOptionCreateManyInput = {
    id?: string
    configurationId: string
    optionId: string
  }

  export type VehicleConfigurationOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleConfigurationOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    configurationId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type VIPBookingCreateInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    contactMethod: $Enums.ContactMethod
    appointmentType: $Enums.AppointmentType
    preferredDate: Date | string
    preferredTime: string
    notes?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    vehicle?: VehicleCreateNestedOneWithoutBookingsInput
    configuration?: VehicleConfigurationCreateNestedOneWithoutBookingsInput
  }

  export type VIPBookingUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    contactMethod: $Enums.ContactMethod
    appointmentType: $Enums.AppointmentType
    preferredDate: Date | string
    preferredTime: string
    notes?: string | null
    vehicleId?: string | null
    configurationId?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
  }

  export type VIPBookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    appointmentType?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    preferredDate?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneWithoutBookingsNestedInput
    configuration?: VehicleConfigurationUpdateOneWithoutBookingsNestedInput
  }

  export type VIPBookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    appointmentType?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    preferredDate?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    configurationId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VIPBookingCreateManyInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    contactMethod: $Enums.ContactMethod
    appointmentType: $Enums.AppointmentType
    preferredDate: Date | string
    preferredTime: string
    notes?: string | null
    vehicleId?: string | null
    configurationId?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
  }

  export type VIPBookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    appointmentType?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    preferredDate?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VIPBookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    appointmentType?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    preferredDate?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    configurationId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumVehicleCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleCategory | EnumVehicleCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleCategory[] | ListEnumVehicleCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleCategory[] | ListEnumVehicleCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleCategoryFilter<$PrismaModel> | $Enums.VehicleCategory
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VehicleConfigurationListRelationFilter = {
    every?: VehicleConfigurationWhereInput
    some?: VehicleConfigurationWhereInput
    none?: VehicleConfigurationWhereInput
  }

  export type VIPBookingListRelationFilter = {
    every?: VIPBookingWhereInput
    some?: VIPBookingWhereInput
    none?: VIPBookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VehicleConfigurationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VIPBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category?: SortOrder
    horsepower?: SortOrder
    torqueNm?: SortOrder
    zeroToHundred?: SortOrder
    topSpeedKmh?: SortOrder
    rangeKm?: SortOrder
    consumption?: SortOrder
    basePriceChf?: SortOrder
    available?: SortOrder
    heroImage?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    horsepower?: SortOrder
    torqueNm?: SortOrder
    zeroToHundred?: SortOrder
    topSpeedKmh?: SortOrder
    rangeKm?: SortOrder
    basePriceChf?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category?: SortOrder
    horsepower?: SortOrder
    torqueNm?: SortOrder
    zeroToHundred?: SortOrder
    topSpeedKmh?: SortOrder
    rangeKm?: SortOrder
    consumption?: SortOrder
    basePriceChf?: SortOrder
    available?: SortOrder
    heroImage?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category?: SortOrder
    horsepower?: SortOrder
    torqueNm?: SortOrder
    zeroToHundred?: SortOrder
    topSpeedKmh?: SortOrder
    rangeKm?: SortOrder
    consumption?: SortOrder
    basePriceChf?: SortOrder
    available?: SortOrder
    heroImage?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    horsepower?: SortOrder
    torqueNm?: SortOrder
    zeroToHundred?: SortOrder
    topSpeedKmh?: SortOrder
    rangeKm?: SortOrder
    basePriceChf?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumVehicleCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleCategory | EnumVehicleCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleCategory[] | ListEnumVehicleCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleCategory[] | ListEnumVehicleCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleCategoryWithAggregatesFilter<$PrismaModel> | $Enums.VehicleCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleCategoryFilter<$PrismaModel>
    _max?: NestedEnumVehicleCategoryFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OptionListRelationFilter = {
    every?: OptionWhereInput
    some?: OptionWhereInput
    none?: OptionWhereInput
  }

  export type OptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OptionCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type OptionCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type OptionCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type OptionCategoryScalarRelationFilter = {
    is?: OptionCategoryWhereInput
    isNot?: OptionCategoryWhereInput
  }

  export type VehicleConfigurationOptionListRelationFilter = {
    every?: VehicleConfigurationOptionWhereInput
    some?: VehicleConfigurationOptionWhereInput
    none?: VehicleConfigurationOptionWhereInput
  }

  export type VehicleConfigurationOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OptionCategoryIdSlugCompoundUniqueInput = {
    categoryId: string
    slug: string
  }

  export type OptionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    priceChf?: SortOrder
    hexColor?: SortOrder
    categoryId?: SortOrder
  }

  export type OptionAvgOrderByAggregateInput = {
    priceChf?: SortOrder
  }

  export type OptionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    priceChf?: SortOrder
    hexColor?: SortOrder
    categoryId?: SortOrder
  }

  export type OptionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    priceChf?: SortOrder
    hexColor?: SortOrder
    categoryId?: SortOrder
  }

  export type OptionSumOrderByAggregateInput = {
    priceChf?: SortOrder
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type VehicleConfigurationCountOrderByAggregateInput = {
    id?: SortOrder
    hashId?: SortOrder
    vehicleId?: SortOrder
    totalPriceChf?: SortOrder
    monthlyLeaseChf?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleConfigurationAvgOrderByAggregateInput = {
    totalPriceChf?: SortOrder
    monthlyLeaseChf?: SortOrder
  }

  export type VehicleConfigurationMaxOrderByAggregateInput = {
    id?: SortOrder
    hashId?: SortOrder
    vehicleId?: SortOrder
    totalPriceChf?: SortOrder
    monthlyLeaseChf?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleConfigurationMinOrderByAggregateInput = {
    id?: SortOrder
    hashId?: SortOrder
    vehicleId?: SortOrder
    totalPriceChf?: SortOrder
    monthlyLeaseChf?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleConfigurationSumOrderByAggregateInput = {
    totalPriceChf?: SortOrder
    monthlyLeaseChf?: SortOrder
  }

  export type VehicleConfigurationScalarRelationFilter = {
    is?: VehicleConfigurationWhereInput
    isNot?: VehicleConfigurationWhereInput
  }

  export type OptionScalarRelationFilter = {
    is?: OptionWhereInput
    isNot?: OptionWhereInput
  }

  export type VehicleConfigurationOptionConfigurationIdOptionIdCompoundUniqueInput = {
    configurationId: string
    optionId: string
  }

  export type VehicleConfigurationOptionCountOrderByAggregateInput = {
    id?: SortOrder
    configurationId?: SortOrder
    optionId?: SortOrder
  }

  export type VehicleConfigurationOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    configurationId?: SortOrder
    optionId?: SortOrder
  }

  export type VehicleConfigurationOptionMinOrderByAggregateInput = {
    id?: SortOrder
    configurationId?: SortOrder
    optionId?: SortOrder
  }

  export type EnumContactMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactMethod | EnumContactMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumContactMethodFilter<$PrismaModel> | $Enums.ContactMethod
  }

  export type EnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type VehicleNullableScalarRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type VehicleConfigurationNullableScalarRelationFilter = {
    is?: VehicleConfigurationWhereInput | null
    isNot?: VehicleConfigurationWhereInput | null
  }

  export type VIPBookingCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    contactMethod?: SortOrder
    appointmentType?: SortOrder
    preferredDate?: SortOrder
    preferredTime?: SortOrder
    notes?: SortOrder
    vehicleId?: SortOrder
    configurationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type VIPBookingMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    contactMethod?: SortOrder
    appointmentType?: SortOrder
    preferredDate?: SortOrder
    preferredTime?: SortOrder
    notes?: SortOrder
    vehicleId?: SortOrder
    configurationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type VIPBookingMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    contactMethod?: SortOrder
    appointmentType?: SortOrder
    preferredDate?: SortOrder
    preferredTime?: SortOrder
    notes?: SortOrder
    vehicleId?: SortOrder
    configurationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumContactMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactMethod | EnumContactMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumContactMethodWithAggregatesFilter<$PrismaModel> | $Enums.ContactMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactMethodFilter<$PrismaModel>
    _max?: NestedEnumContactMethodFilter<$PrismaModel>
  }

  export type EnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type VehicleConfigurationCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleConfigurationCreateWithoutVehicleInput, VehicleConfigurationUncheckedCreateWithoutVehicleInput> | VehicleConfigurationCreateWithoutVehicleInput[] | VehicleConfigurationUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleConfigurationCreateOrConnectWithoutVehicleInput | VehicleConfigurationCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleConfigurationCreateManyVehicleInputEnvelope
    connect?: VehicleConfigurationWhereUniqueInput | VehicleConfigurationWhereUniqueInput[]
  }

  export type VIPBookingCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VIPBookingCreateWithoutVehicleInput, VIPBookingUncheckedCreateWithoutVehicleInput> | VIPBookingCreateWithoutVehicleInput[] | VIPBookingUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VIPBookingCreateOrConnectWithoutVehicleInput | VIPBookingCreateOrConnectWithoutVehicleInput[]
    createMany?: VIPBookingCreateManyVehicleInputEnvelope
    connect?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
  }

  export type VehicleConfigurationUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleConfigurationCreateWithoutVehicleInput, VehicleConfigurationUncheckedCreateWithoutVehicleInput> | VehicleConfigurationCreateWithoutVehicleInput[] | VehicleConfigurationUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleConfigurationCreateOrConnectWithoutVehicleInput | VehicleConfigurationCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleConfigurationCreateManyVehicleInputEnvelope
    connect?: VehicleConfigurationWhereUniqueInput | VehicleConfigurationWhereUniqueInput[]
  }

  export type VIPBookingUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VIPBookingCreateWithoutVehicleInput, VIPBookingUncheckedCreateWithoutVehicleInput> | VIPBookingCreateWithoutVehicleInput[] | VIPBookingUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VIPBookingCreateOrConnectWithoutVehicleInput | VIPBookingCreateOrConnectWithoutVehicleInput[]
    createMany?: VIPBookingCreateManyVehicleInputEnvelope
    connect?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumVehicleCategoryFieldUpdateOperationsInput = {
    set?: $Enums.VehicleCategory
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VehicleConfigurationUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleConfigurationCreateWithoutVehicleInput, VehicleConfigurationUncheckedCreateWithoutVehicleInput> | VehicleConfigurationCreateWithoutVehicleInput[] | VehicleConfigurationUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleConfigurationCreateOrConnectWithoutVehicleInput | VehicleConfigurationCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleConfigurationUpsertWithWhereUniqueWithoutVehicleInput | VehicleConfigurationUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleConfigurationCreateManyVehicleInputEnvelope
    set?: VehicleConfigurationWhereUniqueInput | VehicleConfigurationWhereUniqueInput[]
    disconnect?: VehicleConfigurationWhereUniqueInput | VehicleConfigurationWhereUniqueInput[]
    delete?: VehicleConfigurationWhereUniqueInput | VehicleConfigurationWhereUniqueInput[]
    connect?: VehicleConfigurationWhereUniqueInput | VehicleConfigurationWhereUniqueInput[]
    update?: VehicleConfigurationUpdateWithWhereUniqueWithoutVehicleInput | VehicleConfigurationUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleConfigurationUpdateManyWithWhereWithoutVehicleInput | VehicleConfigurationUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleConfigurationScalarWhereInput | VehicleConfigurationScalarWhereInput[]
  }

  export type VIPBookingUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VIPBookingCreateWithoutVehicleInput, VIPBookingUncheckedCreateWithoutVehicleInput> | VIPBookingCreateWithoutVehicleInput[] | VIPBookingUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VIPBookingCreateOrConnectWithoutVehicleInput | VIPBookingCreateOrConnectWithoutVehicleInput[]
    upsert?: VIPBookingUpsertWithWhereUniqueWithoutVehicleInput | VIPBookingUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VIPBookingCreateManyVehicleInputEnvelope
    set?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    disconnect?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    delete?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    connect?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    update?: VIPBookingUpdateWithWhereUniqueWithoutVehicleInput | VIPBookingUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VIPBookingUpdateManyWithWhereWithoutVehicleInput | VIPBookingUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VIPBookingScalarWhereInput | VIPBookingScalarWhereInput[]
  }

  export type VehicleConfigurationUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleConfigurationCreateWithoutVehicleInput, VehicleConfigurationUncheckedCreateWithoutVehicleInput> | VehicleConfigurationCreateWithoutVehicleInput[] | VehicleConfigurationUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleConfigurationCreateOrConnectWithoutVehicleInput | VehicleConfigurationCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleConfigurationUpsertWithWhereUniqueWithoutVehicleInput | VehicleConfigurationUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleConfigurationCreateManyVehicleInputEnvelope
    set?: VehicleConfigurationWhereUniqueInput | VehicleConfigurationWhereUniqueInput[]
    disconnect?: VehicleConfigurationWhereUniqueInput | VehicleConfigurationWhereUniqueInput[]
    delete?: VehicleConfigurationWhereUniqueInput | VehicleConfigurationWhereUniqueInput[]
    connect?: VehicleConfigurationWhereUniqueInput | VehicleConfigurationWhereUniqueInput[]
    update?: VehicleConfigurationUpdateWithWhereUniqueWithoutVehicleInput | VehicleConfigurationUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleConfigurationUpdateManyWithWhereWithoutVehicleInput | VehicleConfigurationUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleConfigurationScalarWhereInput | VehicleConfigurationScalarWhereInput[]
  }

  export type VIPBookingUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VIPBookingCreateWithoutVehicleInput, VIPBookingUncheckedCreateWithoutVehicleInput> | VIPBookingCreateWithoutVehicleInput[] | VIPBookingUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VIPBookingCreateOrConnectWithoutVehicleInput | VIPBookingCreateOrConnectWithoutVehicleInput[]
    upsert?: VIPBookingUpsertWithWhereUniqueWithoutVehicleInput | VIPBookingUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VIPBookingCreateManyVehicleInputEnvelope
    set?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    disconnect?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    delete?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    connect?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    update?: VIPBookingUpdateWithWhereUniqueWithoutVehicleInput | VIPBookingUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VIPBookingUpdateManyWithWhereWithoutVehicleInput | VIPBookingUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VIPBookingScalarWhereInput | VIPBookingScalarWhereInput[]
  }

  export type OptionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<OptionCreateWithoutCategoryInput, OptionUncheckedCreateWithoutCategoryInput> | OptionCreateWithoutCategoryInput[] | OptionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutCategoryInput | OptionCreateOrConnectWithoutCategoryInput[]
    createMany?: OptionCreateManyCategoryInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type OptionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<OptionCreateWithoutCategoryInput, OptionUncheckedCreateWithoutCategoryInput> | OptionCreateWithoutCategoryInput[] | OptionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutCategoryInput | OptionCreateOrConnectWithoutCategoryInput[]
    createMany?: OptionCreateManyCategoryInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type OptionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<OptionCreateWithoutCategoryInput, OptionUncheckedCreateWithoutCategoryInput> | OptionCreateWithoutCategoryInput[] | OptionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutCategoryInput | OptionCreateOrConnectWithoutCategoryInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutCategoryInput | OptionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: OptionCreateManyCategoryInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutCategoryInput | OptionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutCategoryInput | OptionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type OptionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<OptionCreateWithoutCategoryInput, OptionUncheckedCreateWithoutCategoryInput> | OptionCreateWithoutCategoryInput[] | OptionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutCategoryInput | OptionCreateOrConnectWithoutCategoryInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutCategoryInput | OptionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: OptionCreateManyCategoryInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutCategoryInput | OptionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutCategoryInput | OptionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type OptionCategoryCreateNestedOneWithoutOptionsInput = {
    create?: XOR<OptionCategoryCreateWithoutOptionsInput, OptionCategoryUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: OptionCategoryCreateOrConnectWithoutOptionsInput
    connect?: OptionCategoryWhereUniqueInput
  }

  export type VehicleConfigurationOptionCreateNestedManyWithoutOptionInput = {
    create?: XOR<VehicleConfigurationOptionCreateWithoutOptionInput, VehicleConfigurationOptionUncheckedCreateWithoutOptionInput> | VehicleConfigurationOptionCreateWithoutOptionInput[] | VehicleConfigurationOptionUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VehicleConfigurationOptionCreateOrConnectWithoutOptionInput | VehicleConfigurationOptionCreateOrConnectWithoutOptionInput[]
    createMany?: VehicleConfigurationOptionCreateManyOptionInputEnvelope
    connect?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
  }

  export type VehicleConfigurationOptionUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<VehicleConfigurationOptionCreateWithoutOptionInput, VehicleConfigurationOptionUncheckedCreateWithoutOptionInput> | VehicleConfigurationOptionCreateWithoutOptionInput[] | VehicleConfigurationOptionUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VehicleConfigurationOptionCreateOrConnectWithoutOptionInput | VehicleConfigurationOptionCreateOrConnectWithoutOptionInput[]
    createMany?: VehicleConfigurationOptionCreateManyOptionInputEnvelope
    connect?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
  }

  export type OptionCategoryUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<OptionCategoryCreateWithoutOptionsInput, OptionCategoryUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: OptionCategoryCreateOrConnectWithoutOptionsInput
    upsert?: OptionCategoryUpsertWithoutOptionsInput
    connect?: OptionCategoryWhereUniqueInput
    update?: XOR<XOR<OptionCategoryUpdateToOneWithWhereWithoutOptionsInput, OptionCategoryUpdateWithoutOptionsInput>, OptionCategoryUncheckedUpdateWithoutOptionsInput>
  }

  export type VehicleConfigurationOptionUpdateManyWithoutOptionNestedInput = {
    create?: XOR<VehicleConfigurationOptionCreateWithoutOptionInput, VehicleConfigurationOptionUncheckedCreateWithoutOptionInput> | VehicleConfigurationOptionCreateWithoutOptionInput[] | VehicleConfigurationOptionUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VehicleConfigurationOptionCreateOrConnectWithoutOptionInput | VehicleConfigurationOptionCreateOrConnectWithoutOptionInput[]
    upsert?: VehicleConfigurationOptionUpsertWithWhereUniqueWithoutOptionInput | VehicleConfigurationOptionUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: VehicleConfigurationOptionCreateManyOptionInputEnvelope
    set?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    disconnect?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    delete?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    connect?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    update?: VehicleConfigurationOptionUpdateWithWhereUniqueWithoutOptionInput | VehicleConfigurationOptionUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: VehicleConfigurationOptionUpdateManyWithWhereWithoutOptionInput | VehicleConfigurationOptionUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: VehicleConfigurationOptionScalarWhereInput | VehicleConfigurationOptionScalarWhereInput[]
  }

  export type VehicleConfigurationOptionUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<VehicleConfigurationOptionCreateWithoutOptionInput, VehicleConfigurationOptionUncheckedCreateWithoutOptionInput> | VehicleConfigurationOptionCreateWithoutOptionInput[] | VehicleConfigurationOptionUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VehicleConfigurationOptionCreateOrConnectWithoutOptionInput | VehicleConfigurationOptionCreateOrConnectWithoutOptionInput[]
    upsert?: VehicleConfigurationOptionUpsertWithWhereUniqueWithoutOptionInput | VehicleConfigurationOptionUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: VehicleConfigurationOptionCreateManyOptionInputEnvelope
    set?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    disconnect?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    delete?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    connect?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    update?: VehicleConfigurationOptionUpdateWithWhereUniqueWithoutOptionInput | VehicleConfigurationOptionUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: VehicleConfigurationOptionUpdateManyWithWhereWithoutOptionInput | VehicleConfigurationOptionUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: VehicleConfigurationOptionScalarWhereInput | VehicleConfigurationOptionScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutConfigurationsInput = {
    create?: XOR<VehicleCreateWithoutConfigurationsInput, VehicleUncheckedCreateWithoutConfigurationsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutConfigurationsInput
    connect?: VehicleWhereUniqueInput
  }

  export type VehicleConfigurationOptionCreateNestedManyWithoutConfigurationInput = {
    create?: XOR<VehicleConfigurationOptionCreateWithoutConfigurationInput, VehicleConfigurationOptionUncheckedCreateWithoutConfigurationInput> | VehicleConfigurationOptionCreateWithoutConfigurationInput[] | VehicleConfigurationOptionUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: VehicleConfigurationOptionCreateOrConnectWithoutConfigurationInput | VehicleConfigurationOptionCreateOrConnectWithoutConfigurationInput[]
    createMany?: VehicleConfigurationOptionCreateManyConfigurationInputEnvelope
    connect?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
  }

  export type VIPBookingCreateNestedManyWithoutConfigurationInput = {
    create?: XOR<VIPBookingCreateWithoutConfigurationInput, VIPBookingUncheckedCreateWithoutConfigurationInput> | VIPBookingCreateWithoutConfigurationInput[] | VIPBookingUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: VIPBookingCreateOrConnectWithoutConfigurationInput | VIPBookingCreateOrConnectWithoutConfigurationInput[]
    createMany?: VIPBookingCreateManyConfigurationInputEnvelope
    connect?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
  }

  export type VehicleConfigurationOptionUncheckedCreateNestedManyWithoutConfigurationInput = {
    create?: XOR<VehicleConfigurationOptionCreateWithoutConfigurationInput, VehicleConfigurationOptionUncheckedCreateWithoutConfigurationInput> | VehicleConfigurationOptionCreateWithoutConfigurationInput[] | VehicleConfigurationOptionUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: VehicleConfigurationOptionCreateOrConnectWithoutConfigurationInput | VehicleConfigurationOptionCreateOrConnectWithoutConfigurationInput[]
    createMany?: VehicleConfigurationOptionCreateManyConfigurationInputEnvelope
    connect?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
  }

  export type VIPBookingUncheckedCreateNestedManyWithoutConfigurationInput = {
    create?: XOR<VIPBookingCreateWithoutConfigurationInput, VIPBookingUncheckedCreateWithoutConfigurationInput> | VIPBookingCreateWithoutConfigurationInput[] | VIPBookingUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: VIPBookingCreateOrConnectWithoutConfigurationInput | VIPBookingCreateOrConnectWithoutConfigurationInput[]
    createMany?: VIPBookingCreateManyConfigurationInputEnvelope
    connect?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
  }

  export type VehicleUpdateOneRequiredWithoutConfigurationsNestedInput = {
    create?: XOR<VehicleCreateWithoutConfigurationsInput, VehicleUncheckedCreateWithoutConfigurationsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutConfigurationsInput
    upsert?: VehicleUpsertWithoutConfigurationsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutConfigurationsInput, VehicleUpdateWithoutConfigurationsInput>, VehicleUncheckedUpdateWithoutConfigurationsInput>
  }

  export type VehicleConfigurationOptionUpdateManyWithoutConfigurationNestedInput = {
    create?: XOR<VehicleConfigurationOptionCreateWithoutConfigurationInput, VehicleConfigurationOptionUncheckedCreateWithoutConfigurationInput> | VehicleConfigurationOptionCreateWithoutConfigurationInput[] | VehicleConfigurationOptionUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: VehicleConfigurationOptionCreateOrConnectWithoutConfigurationInput | VehicleConfigurationOptionCreateOrConnectWithoutConfigurationInput[]
    upsert?: VehicleConfigurationOptionUpsertWithWhereUniqueWithoutConfigurationInput | VehicleConfigurationOptionUpsertWithWhereUniqueWithoutConfigurationInput[]
    createMany?: VehicleConfigurationOptionCreateManyConfigurationInputEnvelope
    set?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    disconnect?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    delete?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    connect?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    update?: VehicleConfigurationOptionUpdateWithWhereUniqueWithoutConfigurationInput | VehicleConfigurationOptionUpdateWithWhereUniqueWithoutConfigurationInput[]
    updateMany?: VehicleConfigurationOptionUpdateManyWithWhereWithoutConfigurationInput | VehicleConfigurationOptionUpdateManyWithWhereWithoutConfigurationInput[]
    deleteMany?: VehicleConfigurationOptionScalarWhereInput | VehicleConfigurationOptionScalarWhereInput[]
  }

  export type VIPBookingUpdateManyWithoutConfigurationNestedInput = {
    create?: XOR<VIPBookingCreateWithoutConfigurationInput, VIPBookingUncheckedCreateWithoutConfigurationInput> | VIPBookingCreateWithoutConfigurationInput[] | VIPBookingUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: VIPBookingCreateOrConnectWithoutConfigurationInput | VIPBookingCreateOrConnectWithoutConfigurationInput[]
    upsert?: VIPBookingUpsertWithWhereUniqueWithoutConfigurationInput | VIPBookingUpsertWithWhereUniqueWithoutConfigurationInput[]
    createMany?: VIPBookingCreateManyConfigurationInputEnvelope
    set?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    disconnect?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    delete?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    connect?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    update?: VIPBookingUpdateWithWhereUniqueWithoutConfigurationInput | VIPBookingUpdateWithWhereUniqueWithoutConfigurationInput[]
    updateMany?: VIPBookingUpdateManyWithWhereWithoutConfigurationInput | VIPBookingUpdateManyWithWhereWithoutConfigurationInput[]
    deleteMany?: VIPBookingScalarWhereInput | VIPBookingScalarWhereInput[]
  }

  export type VehicleConfigurationOptionUncheckedUpdateManyWithoutConfigurationNestedInput = {
    create?: XOR<VehicleConfigurationOptionCreateWithoutConfigurationInput, VehicleConfigurationOptionUncheckedCreateWithoutConfigurationInput> | VehicleConfigurationOptionCreateWithoutConfigurationInput[] | VehicleConfigurationOptionUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: VehicleConfigurationOptionCreateOrConnectWithoutConfigurationInput | VehicleConfigurationOptionCreateOrConnectWithoutConfigurationInput[]
    upsert?: VehicleConfigurationOptionUpsertWithWhereUniqueWithoutConfigurationInput | VehicleConfigurationOptionUpsertWithWhereUniqueWithoutConfigurationInput[]
    createMany?: VehicleConfigurationOptionCreateManyConfigurationInputEnvelope
    set?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    disconnect?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    delete?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    connect?: VehicleConfigurationOptionWhereUniqueInput | VehicleConfigurationOptionWhereUniqueInput[]
    update?: VehicleConfigurationOptionUpdateWithWhereUniqueWithoutConfigurationInput | VehicleConfigurationOptionUpdateWithWhereUniqueWithoutConfigurationInput[]
    updateMany?: VehicleConfigurationOptionUpdateManyWithWhereWithoutConfigurationInput | VehicleConfigurationOptionUpdateManyWithWhereWithoutConfigurationInput[]
    deleteMany?: VehicleConfigurationOptionScalarWhereInput | VehicleConfigurationOptionScalarWhereInput[]
  }

  export type VIPBookingUncheckedUpdateManyWithoutConfigurationNestedInput = {
    create?: XOR<VIPBookingCreateWithoutConfigurationInput, VIPBookingUncheckedCreateWithoutConfigurationInput> | VIPBookingCreateWithoutConfigurationInput[] | VIPBookingUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: VIPBookingCreateOrConnectWithoutConfigurationInput | VIPBookingCreateOrConnectWithoutConfigurationInput[]
    upsert?: VIPBookingUpsertWithWhereUniqueWithoutConfigurationInput | VIPBookingUpsertWithWhereUniqueWithoutConfigurationInput[]
    createMany?: VIPBookingCreateManyConfigurationInputEnvelope
    set?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    disconnect?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    delete?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    connect?: VIPBookingWhereUniqueInput | VIPBookingWhereUniqueInput[]
    update?: VIPBookingUpdateWithWhereUniqueWithoutConfigurationInput | VIPBookingUpdateWithWhereUniqueWithoutConfigurationInput[]
    updateMany?: VIPBookingUpdateManyWithWhereWithoutConfigurationInput | VIPBookingUpdateManyWithWhereWithoutConfigurationInput[]
    deleteMany?: VIPBookingScalarWhereInput | VIPBookingScalarWhereInput[]
  }

  export type VehicleConfigurationCreateNestedOneWithoutOptionsInput = {
    create?: XOR<VehicleConfigurationCreateWithoutOptionsInput, VehicleConfigurationUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: VehicleConfigurationCreateOrConnectWithoutOptionsInput
    connect?: VehicleConfigurationWhereUniqueInput
  }

  export type OptionCreateNestedOneWithoutConfigurationsInput = {
    create?: XOR<OptionCreateWithoutConfigurationsInput, OptionUncheckedCreateWithoutConfigurationsInput>
    connectOrCreate?: OptionCreateOrConnectWithoutConfigurationsInput
    connect?: OptionWhereUniqueInput
  }

  export type VehicleConfigurationUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<VehicleConfigurationCreateWithoutOptionsInput, VehicleConfigurationUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: VehicleConfigurationCreateOrConnectWithoutOptionsInput
    upsert?: VehicleConfigurationUpsertWithoutOptionsInput
    connect?: VehicleConfigurationWhereUniqueInput
    update?: XOR<XOR<VehicleConfigurationUpdateToOneWithWhereWithoutOptionsInput, VehicleConfigurationUpdateWithoutOptionsInput>, VehicleConfigurationUncheckedUpdateWithoutOptionsInput>
  }

  export type OptionUpdateOneRequiredWithoutConfigurationsNestedInput = {
    create?: XOR<OptionCreateWithoutConfigurationsInput, OptionUncheckedCreateWithoutConfigurationsInput>
    connectOrCreate?: OptionCreateOrConnectWithoutConfigurationsInput
    upsert?: OptionUpsertWithoutConfigurationsInput
    connect?: OptionWhereUniqueInput
    update?: XOR<XOR<OptionUpdateToOneWithWhereWithoutConfigurationsInput, OptionUpdateWithoutConfigurationsInput>, OptionUncheckedUpdateWithoutConfigurationsInput>
  }

  export type VehicleCreateNestedOneWithoutBookingsInput = {
    create?: XOR<VehicleCreateWithoutBookingsInput, VehicleUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutBookingsInput
    connect?: VehicleWhereUniqueInput
  }

  export type VehicleConfigurationCreateNestedOneWithoutBookingsInput = {
    create?: XOR<VehicleConfigurationCreateWithoutBookingsInput, VehicleConfigurationUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: VehicleConfigurationCreateOrConnectWithoutBookingsInput
    connect?: VehicleConfigurationWhereUniqueInput
  }

  export type EnumContactMethodFieldUpdateOperationsInput = {
    set?: $Enums.ContactMethod
  }

  export type EnumAppointmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentType
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type VehicleUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<VehicleCreateWithoutBookingsInput, VehicleUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutBookingsInput
    upsert?: VehicleUpsertWithoutBookingsInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutBookingsInput, VehicleUpdateWithoutBookingsInput>, VehicleUncheckedUpdateWithoutBookingsInput>
  }

  export type VehicleConfigurationUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<VehicleConfigurationCreateWithoutBookingsInput, VehicleConfigurationUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: VehicleConfigurationCreateOrConnectWithoutBookingsInput
    upsert?: VehicleConfigurationUpsertWithoutBookingsInput
    disconnect?: VehicleConfigurationWhereInput | boolean
    delete?: VehicleConfigurationWhereInput | boolean
    connect?: VehicleConfigurationWhereUniqueInput
    update?: XOR<XOR<VehicleConfigurationUpdateToOneWithWhereWithoutBookingsInput, VehicleConfigurationUpdateWithoutBookingsInput>, VehicleConfigurationUncheckedUpdateWithoutBookingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumVehicleCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleCategory | EnumVehicleCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleCategory[] | ListEnumVehicleCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleCategory[] | ListEnumVehicleCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleCategoryFilter<$PrismaModel> | $Enums.VehicleCategory
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumVehicleCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleCategory | EnumVehicleCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleCategory[] | ListEnumVehicleCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleCategory[] | ListEnumVehicleCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleCategoryWithAggregatesFilter<$PrismaModel> | $Enums.VehicleCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleCategoryFilter<$PrismaModel>
    _max?: NestedEnumVehicleCategoryFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumContactMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactMethod | EnumContactMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumContactMethodFilter<$PrismaModel> | $Enums.ContactMethod
  }

  export type NestedEnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumContactMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactMethod | EnumContactMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumContactMethodWithAggregatesFilter<$PrismaModel> | $Enums.ContactMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactMethodFilter<$PrismaModel>
    _max?: NestedEnumContactMethodFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type VehicleConfigurationCreateWithoutVehicleInput = {
    id?: string
    hashId: string
    totalPriceChf: number
    monthlyLeaseChf: number
    createdAt?: Date | string
    options?: VehicleConfigurationOptionCreateNestedManyWithoutConfigurationInput
    bookings?: VIPBookingCreateNestedManyWithoutConfigurationInput
  }

  export type VehicleConfigurationUncheckedCreateWithoutVehicleInput = {
    id?: string
    hashId: string
    totalPriceChf: number
    monthlyLeaseChf: number
    createdAt?: Date | string
    options?: VehicleConfigurationOptionUncheckedCreateNestedManyWithoutConfigurationInput
    bookings?: VIPBookingUncheckedCreateNestedManyWithoutConfigurationInput
  }

  export type VehicleConfigurationCreateOrConnectWithoutVehicleInput = {
    where: VehicleConfigurationWhereUniqueInput
    create: XOR<VehicleConfigurationCreateWithoutVehicleInput, VehicleConfigurationUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleConfigurationCreateManyVehicleInputEnvelope = {
    data: VehicleConfigurationCreateManyVehicleInput | VehicleConfigurationCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type VIPBookingCreateWithoutVehicleInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    contactMethod: $Enums.ContactMethod
    appointmentType: $Enums.AppointmentType
    preferredDate: Date | string
    preferredTime: string
    notes?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    configuration?: VehicleConfigurationCreateNestedOneWithoutBookingsInput
  }

  export type VIPBookingUncheckedCreateWithoutVehicleInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    contactMethod: $Enums.ContactMethod
    appointmentType: $Enums.AppointmentType
    preferredDate: Date | string
    preferredTime: string
    notes?: string | null
    configurationId?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
  }

  export type VIPBookingCreateOrConnectWithoutVehicleInput = {
    where: VIPBookingWhereUniqueInput
    create: XOR<VIPBookingCreateWithoutVehicleInput, VIPBookingUncheckedCreateWithoutVehicleInput>
  }

  export type VIPBookingCreateManyVehicleInputEnvelope = {
    data: VIPBookingCreateManyVehicleInput | VIPBookingCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type VehicleConfigurationUpsertWithWhereUniqueWithoutVehicleInput = {
    where: VehicleConfigurationWhereUniqueInput
    update: XOR<VehicleConfigurationUpdateWithoutVehicleInput, VehicleConfigurationUncheckedUpdateWithoutVehicleInput>
    create: XOR<VehicleConfigurationCreateWithoutVehicleInput, VehicleConfigurationUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleConfigurationUpdateWithWhereUniqueWithoutVehicleInput = {
    where: VehicleConfigurationWhereUniqueInput
    data: XOR<VehicleConfigurationUpdateWithoutVehicleInput, VehicleConfigurationUncheckedUpdateWithoutVehicleInput>
  }

  export type VehicleConfigurationUpdateManyWithWhereWithoutVehicleInput = {
    where: VehicleConfigurationScalarWhereInput
    data: XOR<VehicleConfigurationUpdateManyMutationInput, VehicleConfigurationUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VehicleConfigurationScalarWhereInput = {
    AND?: VehicleConfigurationScalarWhereInput | VehicleConfigurationScalarWhereInput[]
    OR?: VehicleConfigurationScalarWhereInput[]
    NOT?: VehicleConfigurationScalarWhereInput | VehicleConfigurationScalarWhereInput[]
    id?: StringFilter<"VehicleConfiguration"> | string
    hashId?: StringFilter<"VehicleConfiguration"> | string
    vehicleId?: StringFilter<"VehicleConfiguration"> | string
    totalPriceChf?: IntFilter<"VehicleConfiguration"> | number
    monthlyLeaseChf?: IntFilter<"VehicleConfiguration"> | number
    createdAt?: DateTimeFilter<"VehicleConfiguration"> | Date | string
  }

  export type VIPBookingUpsertWithWhereUniqueWithoutVehicleInput = {
    where: VIPBookingWhereUniqueInput
    update: XOR<VIPBookingUpdateWithoutVehicleInput, VIPBookingUncheckedUpdateWithoutVehicleInput>
    create: XOR<VIPBookingCreateWithoutVehicleInput, VIPBookingUncheckedCreateWithoutVehicleInput>
  }

  export type VIPBookingUpdateWithWhereUniqueWithoutVehicleInput = {
    where: VIPBookingWhereUniqueInput
    data: XOR<VIPBookingUpdateWithoutVehicleInput, VIPBookingUncheckedUpdateWithoutVehicleInput>
  }

  export type VIPBookingUpdateManyWithWhereWithoutVehicleInput = {
    where: VIPBookingScalarWhereInput
    data: XOR<VIPBookingUpdateManyMutationInput, VIPBookingUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VIPBookingScalarWhereInput = {
    AND?: VIPBookingScalarWhereInput | VIPBookingScalarWhereInput[]
    OR?: VIPBookingScalarWhereInput[]
    NOT?: VIPBookingScalarWhereInput | VIPBookingScalarWhereInput[]
    id?: StringFilter<"VIPBooking"> | string
    fullName?: StringFilter<"VIPBooking"> | string
    email?: StringFilter<"VIPBooking"> | string
    phone?: StringFilter<"VIPBooking"> | string
    contactMethod?: EnumContactMethodFilter<"VIPBooking"> | $Enums.ContactMethod
    appointmentType?: EnumAppointmentTypeFilter<"VIPBooking"> | $Enums.AppointmentType
    preferredDate?: DateTimeFilter<"VIPBooking"> | Date | string
    preferredTime?: StringFilter<"VIPBooking"> | string
    notes?: StringNullableFilter<"VIPBooking"> | string | null
    vehicleId?: StringNullableFilter<"VIPBooking"> | string | null
    configurationId?: StringNullableFilter<"VIPBooking"> | string | null
    status?: EnumBookingStatusFilter<"VIPBooking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"VIPBooking"> | Date | string
  }

  export type OptionCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    priceChf: number
    hexColor?: string | null
    configurations?: VehicleConfigurationOptionCreateNestedManyWithoutOptionInput
  }

  export type OptionUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    priceChf: number
    hexColor?: string | null
    configurations?: VehicleConfigurationOptionUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionCreateOrConnectWithoutCategoryInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutCategoryInput, OptionUncheckedCreateWithoutCategoryInput>
  }

  export type OptionCreateManyCategoryInputEnvelope = {
    data: OptionCreateManyCategoryInput | OptionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type OptionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: OptionWhereUniqueInput
    update: XOR<OptionUpdateWithoutCategoryInput, OptionUncheckedUpdateWithoutCategoryInput>
    create: XOR<OptionCreateWithoutCategoryInput, OptionUncheckedCreateWithoutCategoryInput>
  }

  export type OptionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: OptionWhereUniqueInput
    data: XOR<OptionUpdateWithoutCategoryInput, OptionUncheckedUpdateWithoutCategoryInput>
  }

  export type OptionUpdateManyWithWhereWithoutCategoryInput = {
    where: OptionScalarWhereInput
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type OptionScalarWhereInput = {
    AND?: OptionScalarWhereInput | OptionScalarWhereInput[]
    OR?: OptionScalarWhereInput[]
    NOT?: OptionScalarWhereInput | OptionScalarWhereInput[]
    id?: StringFilter<"Option"> | string
    name?: StringFilter<"Option"> | string
    slug?: StringFilter<"Option"> | string
    priceChf?: IntFilter<"Option"> | number
    hexColor?: StringNullableFilter<"Option"> | string | null
    categoryId?: StringFilter<"Option"> | string
  }

  export type OptionCategoryCreateWithoutOptionsInput = {
    id?: string
    name: string
    slug: string
  }

  export type OptionCategoryUncheckedCreateWithoutOptionsInput = {
    id?: string
    name: string
    slug: string
  }

  export type OptionCategoryCreateOrConnectWithoutOptionsInput = {
    where: OptionCategoryWhereUniqueInput
    create: XOR<OptionCategoryCreateWithoutOptionsInput, OptionCategoryUncheckedCreateWithoutOptionsInput>
  }

  export type VehicleConfigurationOptionCreateWithoutOptionInput = {
    id?: string
    configuration: VehicleConfigurationCreateNestedOneWithoutOptionsInput
  }

  export type VehicleConfigurationOptionUncheckedCreateWithoutOptionInput = {
    id?: string
    configurationId: string
  }

  export type VehicleConfigurationOptionCreateOrConnectWithoutOptionInput = {
    where: VehicleConfigurationOptionWhereUniqueInput
    create: XOR<VehicleConfigurationOptionCreateWithoutOptionInput, VehicleConfigurationOptionUncheckedCreateWithoutOptionInput>
  }

  export type VehicleConfigurationOptionCreateManyOptionInputEnvelope = {
    data: VehicleConfigurationOptionCreateManyOptionInput | VehicleConfigurationOptionCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type OptionCategoryUpsertWithoutOptionsInput = {
    update: XOR<OptionCategoryUpdateWithoutOptionsInput, OptionCategoryUncheckedUpdateWithoutOptionsInput>
    create: XOR<OptionCategoryCreateWithoutOptionsInput, OptionCategoryUncheckedCreateWithoutOptionsInput>
    where?: OptionCategoryWhereInput
  }

  export type OptionCategoryUpdateToOneWithWhereWithoutOptionsInput = {
    where?: OptionCategoryWhereInput
    data: XOR<OptionCategoryUpdateWithoutOptionsInput, OptionCategoryUncheckedUpdateWithoutOptionsInput>
  }

  export type OptionCategoryUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type OptionCategoryUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleConfigurationOptionUpsertWithWhereUniqueWithoutOptionInput = {
    where: VehicleConfigurationOptionWhereUniqueInput
    update: XOR<VehicleConfigurationOptionUpdateWithoutOptionInput, VehicleConfigurationOptionUncheckedUpdateWithoutOptionInput>
    create: XOR<VehicleConfigurationOptionCreateWithoutOptionInput, VehicleConfigurationOptionUncheckedCreateWithoutOptionInput>
  }

  export type VehicleConfigurationOptionUpdateWithWhereUniqueWithoutOptionInput = {
    where: VehicleConfigurationOptionWhereUniqueInput
    data: XOR<VehicleConfigurationOptionUpdateWithoutOptionInput, VehicleConfigurationOptionUncheckedUpdateWithoutOptionInput>
  }

  export type VehicleConfigurationOptionUpdateManyWithWhereWithoutOptionInput = {
    where: VehicleConfigurationOptionScalarWhereInput
    data: XOR<VehicleConfigurationOptionUpdateManyMutationInput, VehicleConfigurationOptionUncheckedUpdateManyWithoutOptionInput>
  }

  export type VehicleConfigurationOptionScalarWhereInput = {
    AND?: VehicleConfigurationOptionScalarWhereInput | VehicleConfigurationOptionScalarWhereInput[]
    OR?: VehicleConfigurationOptionScalarWhereInput[]
    NOT?: VehicleConfigurationOptionScalarWhereInput | VehicleConfigurationOptionScalarWhereInput[]
    id?: StringFilter<"VehicleConfigurationOption"> | string
    configurationId?: StringFilter<"VehicleConfigurationOption"> | string
    optionId?: StringFilter<"VehicleConfigurationOption"> | string
  }

  export type VehicleCreateWithoutConfigurationsInput = {
    id?: string
    slug: string
    brand: string
    model: string
    category: $Enums.VehicleCategory
    horsepower: number
    torqueNm: number
    zeroToHundred: number
    topSpeedKmh: number
    rangeKm?: number | null
    consumption?: string | null
    basePriceChf: number
    available?: boolean
    heroImage: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: VIPBookingCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutConfigurationsInput = {
    id?: string
    slug: string
    brand: string
    model: string
    category: $Enums.VehicleCategory
    horsepower: number
    torqueNm: number
    zeroToHundred: number
    topSpeedKmh: number
    rangeKm?: number | null
    consumption?: string | null
    basePriceChf: number
    available?: boolean
    heroImage: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: VIPBookingUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutConfigurationsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutConfigurationsInput, VehicleUncheckedCreateWithoutConfigurationsInput>
  }

  export type VehicleConfigurationOptionCreateWithoutConfigurationInput = {
    id?: string
    option: OptionCreateNestedOneWithoutConfigurationsInput
  }

  export type VehicleConfigurationOptionUncheckedCreateWithoutConfigurationInput = {
    id?: string
    optionId: string
  }

  export type VehicleConfigurationOptionCreateOrConnectWithoutConfigurationInput = {
    where: VehicleConfigurationOptionWhereUniqueInput
    create: XOR<VehicleConfigurationOptionCreateWithoutConfigurationInput, VehicleConfigurationOptionUncheckedCreateWithoutConfigurationInput>
  }

  export type VehicleConfigurationOptionCreateManyConfigurationInputEnvelope = {
    data: VehicleConfigurationOptionCreateManyConfigurationInput | VehicleConfigurationOptionCreateManyConfigurationInput[]
    skipDuplicates?: boolean
  }

  export type VIPBookingCreateWithoutConfigurationInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    contactMethod: $Enums.ContactMethod
    appointmentType: $Enums.AppointmentType
    preferredDate: Date | string
    preferredTime: string
    notes?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    vehicle?: VehicleCreateNestedOneWithoutBookingsInput
  }

  export type VIPBookingUncheckedCreateWithoutConfigurationInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    contactMethod: $Enums.ContactMethod
    appointmentType: $Enums.AppointmentType
    preferredDate: Date | string
    preferredTime: string
    notes?: string | null
    vehicleId?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
  }

  export type VIPBookingCreateOrConnectWithoutConfigurationInput = {
    where: VIPBookingWhereUniqueInput
    create: XOR<VIPBookingCreateWithoutConfigurationInput, VIPBookingUncheckedCreateWithoutConfigurationInput>
  }

  export type VIPBookingCreateManyConfigurationInputEnvelope = {
    data: VIPBookingCreateManyConfigurationInput | VIPBookingCreateManyConfigurationInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithoutConfigurationsInput = {
    update: XOR<VehicleUpdateWithoutConfigurationsInput, VehicleUncheckedUpdateWithoutConfigurationsInput>
    create: XOR<VehicleCreateWithoutConfigurationsInput, VehicleUncheckedCreateWithoutConfigurationsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutConfigurationsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutConfigurationsInput, VehicleUncheckedUpdateWithoutConfigurationsInput>
  }

  export type VehicleUpdateWithoutConfigurationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    category?: EnumVehicleCategoryFieldUpdateOperationsInput | $Enums.VehicleCategory
    horsepower?: IntFieldUpdateOperationsInput | number
    torqueNm?: IntFieldUpdateOperationsInput | number
    zeroToHundred?: FloatFieldUpdateOperationsInput | number
    topSpeedKmh?: IntFieldUpdateOperationsInput | number
    rangeKm?: NullableIntFieldUpdateOperationsInput | number | null
    consumption?: NullableStringFieldUpdateOperationsInput | string | null
    basePriceChf?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    heroImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: VIPBookingUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutConfigurationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    category?: EnumVehicleCategoryFieldUpdateOperationsInput | $Enums.VehicleCategory
    horsepower?: IntFieldUpdateOperationsInput | number
    torqueNm?: IntFieldUpdateOperationsInput | number
    zeroToHundred?: FloatFieldUpdateOperationsInput | number
    topSpeedKmh?: IntFieldUpdateOperationsInput | number
    rangeKm?: NullableIntFieldUpdateOperationsInput | number | null
    consumption?: NullableStringFieldUpdateOperationsInput | string | null
    basePriceChf?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    heroImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: VIPBookingUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleConfigurationOptionUpsertWithWhereUniqueWithoutConfigurationInput = {
    where: VehicleConfigurationOptionWhereUniqueInput
    update: XOR<VehicleConfigurationOptionUpdateWithoutConfigurationInput, VehicleConfigurationOptionUncheckedUpdateWithoutConfigurationInput>
    create: XOR<VehicleConfigurationOptionCreateWithoutConfigurationInput, VehicleConfigurationOptionUncheckedCreateWithoutConfigurationInput>
  }

  export type VehicleConfigurationOptionUpdateWithWhereUniqueWithoutConfigurationInput = {
    where: VehicleConfigurationOptionWhereUniqueInput
    data: XOR<VehicleConfigurationOptionUpdateWithoutConfigurationInput, VehicleConfigurationOptionUncheckedUpdateWithoutConfigurationInput>
  }

  export type VehicleConfigurationOptionUpdateManyWithWhereWithoutConfigurationInput = {
    where: VehicleConfigurationOptionScalarWhereInput
    data: XOR<VehicleConfigurationOptionUpdateManyMutationInput, VehicleConfigurationOptionUncheckedUpdateManyWithoutConfigurationInput>
  }

  export type VIPBookingUpsertWithWhereUniqueWithoutConfigurationInput = {
    where: VIPBookingWhereUniqueInput
    update: XOR<VIPBookingUpdateWithoutConfigurationInput, VIPBookingUncheckedUpdateWithoutConfigurationInput>
    create: XOR<VIPBookingCreateWithoutConfigurationInput, VIPBookingUncheckedCreateWithoutConfigurationInput>
  }

  export type VIPBookingUpdateWithWhereUniqueWithoutConfigurationInput = {
    where: VIPBookingWhereUniqueInput
    data: XOR<VIPBookingUpdateWithoutConfigurationInput, VIPBookingUncheckedUpdateWithoutConfigurationInput>
  }

  export type VIPBookingUpdateManyWithWhereWithoutConfigurationInput = {
    where: VIPBookingScalarWhereInput
    data: XOR<VIPBookingUpdateManyMutationInput, VIPBookingUncheckedUpdateManyWithoutConfigurationInput>
  }

  export type VehicleConfigurationCreateWithoutOptionsInput = {
    id?: string
    hashId: string
    totalPriceChf: number
    monthlyLeaseChf: number
    createdAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutConfigurationsInput
    bookings?: VIPBookingCreateNestedManyWithoutConfigurationInput
  }

  export type VehicleConfigurationUncheckedCreateWithoutOptionsInput = {
    id?: string
    hashId: string
    vehicleId: string
    totalPriceChf: number
    monthlyLeaseChf: number
    createdAt?: Date | string
    bookings?: VIPBookingUncheckedCreateNestedManyWithoutConfigurationInput
  }

  export type VehicleConfigurationCreateOrConnectWithoutOptionsInput = {
    where: VehicleConfigurationWhereUniqueInput
    create: XOR<VehicleConfigurationCreateWithoutOptionsInput, VehicleConfigurationUncheckedCreateWithoutOptionsInput>
  }

  export type OptionCreateWithoutConfigurationsInput = {
    id?: string
    name: string
    slug: string
    priceChf: number
    hexColor?: string | null
    category: OptionCategoryCreateNestedOneWithoutOptionsInput
  }

  export type OptionUncheckedCreateWithoutConfigurationsInput = {
    id?: string
    name: string
    slug: string
    priceChf: number
    hexColor?: string | null
    categoryId: string
  }

  export type OptionCreateOrConnectWithoutConfigurationsInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutConfigurationsInput, OptionUncheckedCreateWithoutConfigurationsInput>
  }

  export type VehicleConfigurationUpsertWithoutOptionsInput = {
    update: XOR<VehicleConfigurationUpdateWithoutOptionsInput, VehicleConfigurationUncheckedUpdateWithoutOptionsInput>
    create: XOR<VehicleConfigurationCreateWithoutOptionsInput, VehicleConfigurationUncheckedCreateWithoutOptionsInput>
    where?: VehicleConfigurationWhereInput
  }

  export type VehicleConfigurationUpdateToOneWithWhereWithoutOptionsInput = {
    where?: VehicleConfigurationWhereInput
    data: XOR<VehicleConfigurationUpdateWithoutOptionsInput, VehicleConfigurationUncheckedUpdateWithoutOptionsInput>
  }

  export type VehicleConfigurationUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashId?: StringFieldUpdateOperationsInput | string
    totalPriceChf?: IntFieldUpdateOperationsInput | number
    monthlyLeaseChf?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutConfigurationsNestedInput
    bookings?: VIPBookingUpdateManyWithoutConfigurationNestedInput
  }

  export type VehicleConfigurationUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    totalPriceChf?: IntFieldUpdateOperationsInput | number
    monthlyLeaseChf?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: VIPBookingUncheckedUpdateManyWithoutConfigurationNestedInput
  }

  export type OptionUpsertWithoutConfigurationsInput = {
    update: XOR<OptionUpdateWithoutConfigurationsInput, OptionUncheckedUpdateWithoutConfigurationsInput>
    create: XOR<OptionCreateWithoutConfigurationsInput, OptionUncheckedCreateWithoutConfigurationsInput>
    where?: OptionWhereInput
  }

  export type OptionUpdateToOneWithWhereWithoutConfigurationsInput = {
    where?: OptionWhereInput
    data: XOR<OptionUpdateWithoutConfigurationsInput, OptionUncheckedUpdateWithoutConfigurationsInput>
  }

  export type OptionUpdateWithoutConfigurationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceChf?: IntFieldUpdateOperationsInput | number
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    category?: OptionCategoryUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type OptionUncheckedUpdateWithoutConfigurationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceChf?: IntFieldUpdateOperationsInput | number
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleCreateWithoutBookingsInput = {
    id?: string
    slug: string
    brand: string
    model: string
    category: $Enums.VehicleCategory
    horsepower: number
    torqueNm: number
    zeroToHundred: number
    topSpeedKmh: number
    rangeKm?: number | null
    consumption?: string | null
    basePriceChf: number
    available?: boolean
    heroImage: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configurations?: VehicleConfigurationCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutBookingsInput = {
    id?: string
    slug: string
    brand: string
    model: string
    category: $Enums.VehicleCategory
    horsepower: number
    torqueNm: number
    zeroToHundred: number
    topSpeedKmh: number
    rangeKm?: number | null
    consumption?: string | null
    basePriceChf: number
    available?: boolean
    heroImage: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configurations?: VehicleConfigurationUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutBookingsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutBookingsInput, VehicleUncheckedCreateWithoutBookingsInput>
  }

  export type VehicleConfigurationCreateWithoutBookingsInput = {
    id?: string
    hashId: string
    totalPriceChf: number
    monthlyLeaseChf: number
    createdAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutConfigurationsInput
    options?: VehicleConfigurationOptionCreateNestedManyWithoutConfigurationInput
  }

  export type VehicleConfigurationUncheckedCreateWithoutBookingsInput = {
    id?: string
    hashId: string
    vehicleId: string
    totalPriceChf: number
    monthlyLeaseChf: number
    createdAt?: Date | string
    options?: VehicleConfigurationOptionUncheckedCreateNestedManyWithoutConfigurationInput
  }

  export type VehicleConfigurationCreateOrConnectWithoutBookingsInput = {
    where: VehicleConfigurationWhereUniqueInput
    create: XOR<VehicleConfigurationCreateWithoutBookingsInput, VehicleConfigurationUncheckedCreateWithoutBookingsInput>
  }

  export type VehicleUpsertWithoutBookingsInput = {
    update: XOR<VehicleUpdateWithoutBookingsInput, VehicleUncheckedUpdateWithoutBookingsInput>
    create: XOR<VehicleCreateWithoutBookingsInput, VehicleUncheckedCreateWithoutBookingsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutBookingsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutBookingsInput, VehicleUncheckedUpdateWithoutBookingsInput>
  }

  export type VehicleUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    category?: EnumVehicleCategoryFieldUpdateOperationsInput | $Enums.VehicleCategory
    horsepower?: IntFieldUpdateOperationsInput | number
    torqueNm?: IntFieldUpdateOperationsInput | number
    zeroToHundred?: FloatFieldUpdateOperationsInput | number
    topSpeedKmh?: IntFieldUpdateOperationsInput | number
    rangeKm?: NullableIntFieldUpdateOperationsInput | number | null
    consumption?: NullableStringFieldUpdateOperationsInput | string | null
    basePriceChf?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    heroImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configurations?: VehicleConfigurationUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    category?: EnumVehicleCategoryFieldUpdateOperationsInput | $Enums.VehicleCategory
    horsepower?: IntFieldUpdateOperationsInput | number
    torqueNm?: IntFieldUpdateOperationsInput | number
    zeroToHundred?: FloatFieldUpdateOperationsInput | number
    topSpeedKmh?: IntFieldUpdateOperationsInput | number
    rangeKm?: NullableIntFieldUpdateOperationsInput | number | null
    consumption?: NullableStringFieldUpdateOperationsInput | string | null
    basePriceChf?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    heroImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configurations?: VehicleConfigurationUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleConfigurationUpsertWithoutBookingsInput = {
    update: XOR<VehicleConfigurationUpdateWithoutBookingsInput, VehicleConfigurationUncheckedUpdateWithoutBookingsInput>
    create: XOR<VehicleConfigurationCreateWithoutBookingsInput, VehicleConfigurationUncheckedCreateWithoutBookingsInput>
    where?: VehicleConfigurationWhereInput
  }

  export type VehicleConfigurationUpdateToOneWithWhereWithoutBookingsInput = {
    where?: VehicleConfigurationWhereInput
    data: XOR<VehicleConfigurationUpdateWithoutBookingsInput, VehicleConfigurationUncheckedUpdateWithoutBookingsInput>
  }

  export type VehicleConfigurationUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashId?: StringFieldUpdateOperationsInput | string
    totalPriceChf?: IntFieldUpdateOperationsInput | number
    monthlyLeaseChf?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutConfigurationsNestedInput
    options?: VehicleConfigurationOptionUpdateManyWithoutConfigurationNestedInput
  }

  export type VehicleConfigurationUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    totalPriceChf?: IntFieldUpdateOperationsInput | number
    monthlyLeaseChf?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: VehicleConfigurationOptionUncheckedUpdateManyWithoutConfigurationNestedInput
  }

  export type VehicleConfigurationCreateManyVehicleInput = {
    id?: string
    hashId: string
    totalPriceChf: number
    monthlyLeaseChf: number
    createdAt?: Date | string
  }

  export type VIPBookingCreateManyVehicleInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    contactMethod: $Enums.ContactMethod
    appointmentType: $Enums.AppointmentType
    preferredDate: Date | string
    preferredTime: string
    notes?: string | null
    configurationId?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
  }

  export type VehicleConfigurationUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashId?: StringFieldUpdateOperationsInput | string
    totalPriceChf?: IntFieldUpdateOperationsInput | number
    monthlyLeaseChf?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: VehicleConfigurationOptionUpdateManyWithoutConfigurationNestedInput
    bookings?: VIPBookingUpdateManyWithoutConfigurationNestedInput
  }

  export type VehicleConfigurationUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashId?: StringFieldUpdateOperationsInput | string
    totalPriceChf?: IntFieldUpdateOperationsInput | number
    monthlyLeaseChf?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: VehicleConfigurationOptionUncheckedUpdateManyWithoutConfigurationNestedInput
    bookings?: VIPBookingUncheckedUpdateManyWithoutConfigurationNestedInput
  }

  export type VehicleConfigurationUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashId?: StringFieldUpdateOperationsInput | string
    totalPriceChf?: IntFieldUpdateOperationsInput | number
    monthlyLeaseChf?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VIPBookingUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    appointmentType?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    preferredDate?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: VehicleConfigurationUpdateOneWithoutBookingsNestedInput
  }

  export type VIPBookingUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    appointmentType?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    preferredDate?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    configurationId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VIPBookingUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    appointmentType?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    preferredDate?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    configurationId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionCreateManyCategoryInput = {
    id?: string
    name: string
    slug: string
    priceChf: number
    hexColor?: string | null
  }

  export type OptionUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceChf?: IntFieldUpdateOperationsInput | number
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    configurations?: VehicleConfigurationOptionUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceChf?: IntFieldUpdateOperationsInput | number
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    configurations?: VehicleConfigurationOptionUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceChf?: IntFieldUpdateOperationsInput | number
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehicleConfigurationOptionCreateManyOptionInput = {
    id?: string
    configurationId: string
  }

  export type VehicleConfigurationOptionUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    configuration?: VehicleConfigurationUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type VehicleConfigurationOptionUncheckedUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    configurationId?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleConfigurationOptionUncheckedUpdateManyWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    configurationId?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleConfigurationOptionCreateManyConfigurationInput = {
    id?: string
    optionId: string
  }

  export type VIPBookingCreateManyConfigurationInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    contactMethod: $Enums.ContactMethod
    appointmentType: $Enums.AppointmentType
    preferredDate: Date | string
    preferredTime: string
    notes?: string | null
    vehicleId?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
  }

  export type VehicleConfigurationOptionUpdateWithoutConfigurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: OptionUpdateOneRequiredWithoutConfigurationsNestedInput
  }

  export type VehicleConfigurationOptionUncheckedUpdateWithoutConfigurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleConfigurationOptionUncheckedUpdateManyWithoutConfigurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type VIPBookingUpdateWithoutConfigurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    appointmentType?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    preferredDate?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneWithoutBookingsNestedInput
  }

  export type VIPBookingUncheckedUpdateWithoutConfigurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    appointmentType?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    preferredDate?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VIPBookingUncheckedUpdateManyWithoutConfigurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    appointmentType?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    preferredDate?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}