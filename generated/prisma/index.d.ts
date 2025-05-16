
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model produk
 * 
 */
export type produk = $Result.DefaultSelection<Prisma.$produkPayload>
/**
 * Model pelanggan
 * 
 */
export type pelanggan = $Result.DefaultSelection<Prisma.$pelangganPayload>
/**
 * Model penjualan
 * 
 */
export type penjualan = $Result.DefaultSelection<Prisma.$penjualanPayload>
/**
 * Model pendapatan
 * 
 */
export type pendapatan = $Result.DefaultSelection<Prisma.$pendapatanPayload>
/**
 * Model rating_toko
 * 
 */
export type rating_toko = $Result.DefaultSelection<Prisma.$rating_tokoPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model pesanan
 * 
 */
export type pesanan = $Result.DefaultSelection<Prisma.$pesananPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Produks
 * const produks = await prisma.produk.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Produks
   * const produks = await prisma.produk.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.produk`: Exposes CRUD operations for the **produk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produks
    * const produks = await prisma.produk.findMany()
    * ```
    */
  get produk(): Prisma.produkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pelanggan`: Exposes CRUD operations for the **pelanggan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pelanggans
    * const pelanggans = await prisma.pelanggan.findMany()
    * ```
    */
  get pelanggan(): Prisma.pelangganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penjualan`: Exposes CRUD operations for the **penjualan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penjualans
    * const penjualans = await prisma.penjualan.findMany()
    * ```
    */
  get penjualan(): Prisma.penjualanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pendapatan`: Exposes CRUD operations for the **pendapatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pendapatans
    * const pendapatans = await prisma.pendapatan.findMany()
    * ```
    */
  get pendapatan(): Prisma.pendapatanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating_toko`: Exposes CRUD operations for the **rating_toko** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rating_tokos
    * const rating_tokos = await prisma.rating_toko.findMany()
    * ```
    */
  get rating_toko(): Prisma.rating_tokoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pesanan`: Exposes CRUD operations for the **pesanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pesanans
    * const pesanans = await prisma.pesanan.findMany()
    * ```
    */
  get pesanan(): Prisma.pesananDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    produk: 'produk',
    pelanggan: 'pelanggan',
    penjualan: 'penjualan',
    pendapatan: 'pendapatan',
    rating_toko: 'rating_toko',
    user: 'user',
    pesanan: 'pesanan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "produk" | "pelanggan" | "penjualan" | "pendapatan" | "rating_toko" | "user" | "pesanan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      produk: {
        payload: Prisma.$produkPayload<ExtArgs>
        fields: Prisma.produkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          findFirst: {
            args: Prisma.produkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          findMany: {
            args: Prisma.produkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          create: {
            args: Prisma.produkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          createMany: {
            args: Prisma.produkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.produkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          delete: {
            args: Prisma.produkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          update: {
            args: Prisma.produkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          deleteMany: {
            args: Prisma.produkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.produkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          upsert: {
            args: Prisma.produkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          aggregate: {
            args: Prisma.ProdukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduk>
          }
          groupBy: {
            args: Prisma.produkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.produkCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukCountAggregateOutputType> | number
          }
        }
      }
      pelanggan: {
        payload: Prisma.$pelangganPayload<ExtArgs>
        fields: Prisma.pelangganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pelangganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pelangganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          findFirst: {
            args: Prisma.pelangganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pelangganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          findMany: {
            args: Prisma.pelangganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>[]
          }
          create: {
            args: Prisma.pelangganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          createMany: {
            args: Prisma.pelangganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pelangganCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>[]
          }
          delete: {
            args: Prisma.pelangganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          update: {
            args: Prisma.pelangganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          deleteMany: {
            args: Prisma.pelangganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pelangganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pelangganUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>[]
          }
          upsert: {
            args: Prisma.pelangganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          aggregate: {
            args: Prisma.PelangganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePelanggan>
          }
          groupBy: {
            args: Prisma.pelangganGroupByArgs<ExtArgs>
            result: $Utils.Optional<PelangganGroupByOutputType>[]
          }
          count: {
            args: Prisma.pelangganCountArgs<ExtArgs>
            result: $Utils.Optional<PelangganCountAggregateOutputType> | number
          }
        }
      }
      penjualan: {
        payload: Prisma.$penjualanPayload<ExtArgs>
        fields: Prisma.penjualanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.penjualanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.penjualanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>
          }
          findFirst: {
            args: Prisma.penjualanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.penjualanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>
          }
          findMany: {
            args: Prisma.penjualanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>[]
          }
          create: {
            args: Prisma.penjualanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>
          }
          createMany: {
            args: Prisma.penjualanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.penjualanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>[]
          }
          delete: {
            args: Prisma.penjualanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>
          }
          update: {
            args: Prisma.penjualanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>
          }
          deleteMany: {
            args: Prisma.penjualanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.penjualanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.penjualanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>[]
          }
          upsert: {
            args: Prisma.penjualanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>
          }
          aggregate: {
            args: Prisma.PenjualanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenjualan>
          }
          groupBy: {
            args: Prisma.penjualanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenjualanGroupByOutputType>[]
          }
          count: {
            args: Prisma.penjualanCountArgs<ExtArgs>
            result: $Utils.Optional<PenjualanCountAggregateOutputType> | number
          }
        }
      }
      pendapatan: {
        payload: Prisma.$pendapatanPayload<ExtArgs>
        fields: Prisma.pendapatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pendapatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendapatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pendapatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendapatanPayload>
          }
          findFirst: {
            args: Prisma.pendapatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendapatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pendapatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendapatanPayload>
          }
          findMany: {
            args: Prisma.pendapatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendapatanPayload>[]
          }
          create: {
            args: Prisma.pendapatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendapatanPayload>
          }
          createMany: {
            args: Prisma.pendapatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pendapatanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendapatanPayload>[]
          }
          delete: {
            args: Prisma.pendapatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendapatanPayload>
          }
          update: {
            args: Prisma.pendapatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendapatanPayload>
          }
          deleteMany: {
            args: Prisma.pendapatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pendapatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pendapatanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendapatanPayload>[]
          }
          upsert: {
            args: Prisma.pendapatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendapatanPayload>
          }
          aggregate: {
            args: Prisma.PendapatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendapatan>
          }
          groupBy: {
            args: Prisma.pendapatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendapatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.pendapatanCountArgs<ExtArgs>
            result: $Utils.Optional<PendapatanCountAggregateOutputType> | number
          }
        }
      }
      rating_toko: {
        payload: Prisma.$rating_tokoPayload<ExtArgs>
        fields: Prisma.rating_tokoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rating_tokoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rating_tokoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rating_tokoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rating_tokoPayload>
          }
          findFirst: {
            args: Prisma.rating_tokoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rating_tokoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rating_tokoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rating_tokoPayload>
          }
          findMany: {
            args: Prisma.rating_tokoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rating_tokoPayload>[]
          }
          create: {
            args: Prisma.rating_tokoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rating_tokoPayload>
          }
          createMany: {
            args: Prisma.rating_tokoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rating_tokoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rating_tokoPayload>[]
          }
          delete: {
            args: Prisma.rating_tokoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rating_tokoPayload>
          }
          update: {
            args: Prisma.rating_tokoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rating_tokoPayload>
          }
          deleteMany: {
            args: Prisma.rating_tokoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rating_tokoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rating_tokoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rating_tokoPayload>[]
          }
          upsert: {
            args: Prisma.rating_tokoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rating_tokoPayload>
          }
          aggregate: {
            args: Prisma.Rating_tokoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating_toko>
          }
          groupBy: {
            args: Prisma.rating_tokoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rating_tokoGroupByOutputType>[]
          }
          count: {
            args: Prisma.rating_tokoCountArgs<ExtArgs>
            result: $Utils.Optional<Rating_tokoCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      pesanan: {
        payload: Prisma.$pesananPayload<ExtArgs>
        fields: Prisma.pesananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pesananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pesananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesananPayload>
          }
          findFirst: {
            args: Prisma.pesananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pesananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesananPayload>
          }
          findMany: {
            args: Prisma.pesananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesananPayload>[]
          }
          create: {
            args: Prisma.pesananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesananPayload>
          }
          createMany: {
            args: Prisma.pesananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pesananCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesananPayload>[]
          }
          delete: {
            args: Prisma.pesananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesananPayload>
          }
          update: {
            args: Prisma.pesananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesananPayload>
          }
          deleteMany: {
            args: Prisma.pesananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pesananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pesananUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesananPayload>[]
          }
          upsert: {
            args: Prisma.pesananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesananPayload>
          }
          aggregate: {
            args: Prisma.PesananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePesanan>
          }
          groupBy: {
            args: Prisma.pesananGroupByArgs<ExtArgs>
            result: $Utils.Optional<PesananGroupByOutputType>[]
          }
          count: {
            args: Prisma.pesananCountArgs<ExtArgs>
            result: $Utils.Optional<PesananCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    produk?: produkOmit
    pelanggan?: pelangganOmit
    penjualan?: penjualanOmit
    pendapatan?: pendapatanOmit
    rating_toko?: rating_tokoOmit
    user?: userOmit
    pesanan?: pesananOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ProdukCountOutputType
   */

  export type ProdukCountOutputType = {
    penjualan: number
    pesanan: number
  }

  export type ProdukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualan?: boolean | ProdukCountOutputTypeCountPenjualanArgs
    pesanan?: boolean | ProdukCountOutputTypeCountPesananArgs
  }

  // Custom InputTypes
  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukCountOutputType
     */
    select?: ProdukCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountPenjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penjualanWhereInput
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountPesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pesananWhereInput
  }


  /**
   * Count Type PelangganCountOutputType
   */

  export type PelangganCountOutputType = {
    penjualan: number
  }

  export type PelangganCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualan?: boolean | PelangganCountOutputTypeCountPenjualanArgs
  }

  // Custom InputTypes
  /**
   * PelangganCountOutputType without action
   */
  export type PelangganCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PelangganCountOutputType
     */
    select?: PelangganCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PelangganCountOutputType without action
   */
  export type PelangganCountOutputTypeCountPenjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penjualanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model produk
   */

  export type AggregateProduk = {
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  export type ProdukAvgAggregateOutputType = {
    harga: number | null
    stok: number | null
    terjual: number | null
  }

  export type ProdukSumAggregateOutputType = {
    harga: number | null
    stok: number | null
    terjual: number | null
  }

  export type ProdukMinAggregateOutputType = {
    id: string | null
    nama: string | null
    harga: number | null
    deskripsi: string | null
    gambar_url: string | null
    kategori: string | null
    stok: number | null
    terjual: number | null
  }

  export type ProdukMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    harga: number | null
    deskripsi: string | null
    gambar_url: string | null
    kategori: string | null
    stok: number | null
    terjual: number | null
  }

  export type ProdukCountAggregateOutputType = {
    id: number
    nama: number
    harga: number
    deskripsi: number
    gambar_url: number
    kategori: number
    stok: number
    terjual: number
    _all: number
  }


  export type ProdukAvgAggregateInputType = {
    harga?: true
    stok?: true
    terjual?: true
  }

  export type ProdukSumAggregateInputType = {
    harga?: true
    stok?: true
    terjual?: true
  }

  export type ProdukMinAggregateInputType = {
    id?: true
    nama?: true
    harga?: true
    deskripsi?: true
    gambar_url?: true
    kategori?: true
    stok?: true
    terjual?: true
  }

  export type ProdukMaxAggregateInputType = {
    id?: true
    nama?: true
    harga?: true
    deskripsi?: true
    gambar_url?: true
    kategori?: true
    stok?: true
    terjual?: true
  }

  export type ProdukCountAggregateInputType = {
    id?: true
    nama?: true
    harga?: true
    deskripsi?: true
    gambar_url?: true
    kategori?: true
    stok?: true
    terjual?: true
    _all?: true
  }

  export type ProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produk to aggregate.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produks
    **/
    _count?: true | ProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukMaxAggregateInputType
  }

  export type GetProdukAggregateType<T extends ProdukAggregateArgs> = {
        [P in keyof T & keyof AggregateProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduk[P]>
      : GetScalarType<T[P], AggregateProduk[P]>
  }




  export type produkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkWhereInput
    orderBy?: produkOrderByWithAggregationInput | produkOrderByWithAggregationInput[]
    by: ProdukScalarFieldEnum[] | ProdukScalarFieldEnum
    having?: produkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukCountAggregateInputType | true
    _avg?: ProdukAvgAggregateInputType
    _sum?: ProdukSumAggregateInputType
    _min?: ProdukMinAggregateInputType
    _max?: ProdukMaxAggregateInputType
  }

  export type ProdukGroupByOutputType = {
    id: string
    nama: string
    harga: number
    deskripsi: string
    gambar_url: string
    kategori: string
    stok: number
    terjual: number
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  type GetProdukGroupByPayload<T extends produkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukGroupByOutputType[P]>
        }
      >
    >


  export type produkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    harga?: boolean
    deskripsi?: boolean
    gambar_url?: boolean
    kategori?: boolean
    stok?: boolean
    terjual?: boolean
    penjualan?: boolean | produk$penjualanArgs<ExtArgs>
    pesanan?: boolean | produk$pesananArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type produkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    harga?: boolean
    deskripsi?: boolean
    gambar_url?: boolean
    kategori?: boolean
    stok?: boolean
    terjual?: boolean
  }, ExtArgs["result"]["produk"]>

  export type produkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    harga?: boolean
    deskripsi?: boolean
    gambar_url?: boolean
    kategori?: boolean
    stok?: boolean
    terjual?: boolean
  }, ExtArgs["result"]["produk"]>

  export type produkSelectScalar = {
    id?: boolean
    nama?: boolean
    harga?: boolean
    deskripsi?: boolean
    gambar_url?: boolean
    kategori?: boolean
    stok?: boolean
    terjual?: boolean
  }

  export type produkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "harga" | "deskripsi" | "gambar_url" | "kategori" | "stok" | "terjual", ExtArgs["result"]["produk"]>
  export type produkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualan?: boolean | produk$penjualanArgs<ExtArgs>
    pesanan?: boolean | produk$pesananArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type produkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type produkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $produkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produk"
    objects: {
      penjualan: Prisma.$penjualanPayload<ExtArgs>[]
      pesanan: Prisma.$pesananPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      harga: number
      deskripsi: string
      gambar_url: string
      kategori: string
      stok: number
      terjual: number
    }, ExtArgs["result"]["produk"]>
    composites: {}
  }

  type produkGetPayload<S extends boolean | null | undefined | produkDefaultArgs> = $Result.GetResult<Prisma.$produkPayload, S>

  type produkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdukCountAggregateInputType | true
    }

  export interface produkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produk'], meta: { name: 'produk' } }
    /**
     * Find zero or one Produk that matches the filter.
     * @param {produkFindUniqueArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produkFindUniqueArgs>(args: SelectSubset<T, produkFindUniqueArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produkFindUniqueOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produkFindUniqueOrThrowArgs>(args: SelectSubset<T, produkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindFirstArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produkFindFirstArgs>(args?: SelectSubset<T, produkFindFirstArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindFirstOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produkFindFirstOrThrowArgs>(args?: SelectSubset<T, produkFindFirstOrThrowArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produk.findMany()
     * 
     * // Get first 10 Produks
     * const produks = await prisma.produk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produkWithIdOnly = await prisma.produk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produkFindManyArgs>(args?: SelectSubset<T, produkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produk.
     * @param {produkCreateArgs} args - Arguments to create a Produk.
     * @example
     * // Create one Produk
     * const Produk = await prisma.produk.create({
     *   data: {
     *     // ... data to create a Produk
     *   }
     * })
     * 
     */
    create<T extends produkCreateArgs>(args: SelectSubset<T, produkCreateArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produks.
     * @param {produkCreateManyArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produkCreateManyArgs>(args?: SelectSubset<T, produkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produks and returns the data saved in the database.
     * @param {produkCreateManyAndReturnArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produks and only return the `id`
     * const produkWithIdOnly = await prisma.produk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends produkCreateManyAndReturnArgs>(args?: SelectSubset<T, produkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produk.
     * @param {produkDeleteArgs} args - Arguments to delete one Produk.
     * @example
     * // Delete one Produk
     * const Produk = await prisma.produk.delete({
     *   where: {
     *     // ... filter to delete one Produk
     *   }
     * })
     * 
     */
    delete<T extends produkDeleteArgs>(args: SelectSubset<T, produkDeleteArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produk.
     * @param {produkUpdateArgs} args - Arguments to update one Produk.
     * @example
     * // Update one Produk
     * const produk = await prisma.produk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produkUpdateArgs>(args: SelectSubset<T, produkUpdateArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produks.
     * @param {produkDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produkDeleteManyArgs>(args?: SelectSubset<T, produkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produkUpdateManyArgs>(args: SelectSubset<T, produkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks and returns the data updated in the database.
     * @param {produkUpdateManyAndReturnArgs} args - Arguments to update many Produks.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produks and only return the `id`
     * const produkWithIdOnly = await prisma.produk.updateManyAndReturn({
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
    updateManyAndReturn<T extends produkUpdateManyAndReturnArgs>(args: SelectSubset<T, produkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produk.
     * @param {produkUpsertArgs} args - Arguments to update or create a Produk.
     * @example
     * // Update or create a Produk
     * const produk = await prisma.produk.upsert({
     *   create: {
     *     // ... data to create a Produk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produk we want to update
     *   }
     * })
     */
    upsert<T extends produkUpsertArgs>(args: SelectSubset<T, produkUpsertArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produk.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends produkCountArgs>(
      args?: Subset<T, produkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdukAggregateArgs>(args: Subset<T, ProdukAggregateArgs>): Prisma.PrismaPromise<GetProdukAggregateType<T>>

    /**
     * Group by Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkGroupByArgs} args - Group by arguments.
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
      T extends produkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produkGroupByArgs['orderBy'] }
        : { orderBy?: produkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, produkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produk model
   */
  readonly fields: produkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penjualan<T extends produk$penjualanArgs<ExtArgs> = {}>(args?: Subset<T, produk$penjualanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pesanan<T extends produk$pesananArgs<ExtArgs> = {}>(args?: Subset<T, produk$pesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the produk model
   */
  interface produkFieldRefs {
    readonly id: FieldRef<"produk", 'String'>
    readonly nama: FieldRef<"produk", 'String'>
    readonly harga: FieldRef<"produk", 'Int'>
    readonly deskripsi: FieldRef<"produk", 'String'>
    readonly gambar_url: FieldRef<"produk", 'String'>
    readonly kategori: FieldRef<"produk", 'String'>
    readonly stok: FieldRef<"produk", 'Int'>
    readonly terjual: FieldRef<"produk", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * produk findUnique
   */
  export type produkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk findUniqueOrThrow
   */
  export type produkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk findFirst
   */
  export type produkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk findFirstOrThrow
   */
  export type produkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk findMany
   */
  export type produkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produks to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk create
   */
  export type produkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The data needed to create a produk.
     */
    data: XOR<produkCreateInput, produkUncheckedCreateInput>
  }

  /**
   * produk createMany
   */
  export type produkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produks.
     */
    data: produkCreateManyInput | produkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produk createManyAndReturn
   */
  export type produkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * The data used to create many produks.
     */
    data: produkCreateManyInput | produkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produk update
   */
  export type produkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The data needed to update a produk.
     */
    data: XOR<produkUpdateInput, produkUncheckedUpdateInput>
    /**
     * Choose, which produk to update.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk updateMany
   */
  export type produkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produks.
     */
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyInput>
    /**
     * Filter which produks to update
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to update.
     */
    limit?: number
  }

  /**
   * produk updateManyAndReturn
   */
  export type produkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * The data used to update produks.
     */
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyInput>
    /**
     * Filter which produks to update
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to update.
     */
    limit?: number
  }

  /**
   * produk upsert
   */
  export type produkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The filter to search for the produk to update in case it exists.
     */
    where: produkWhereUniqueInput
    /**
     * In case the produk found by the `where` argument doesn't exist, create a new produk with this data.
     */
    create: XOR<produkCreateInput, produkUncheckedCreateInput>
    /**
     * In case the produk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produkUpdateInput, produkUncheckedUpdateInput>
  }

  /**
   * produk delete
   */
  export type produkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter which produk to delete.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk deleteMany
   */
  export type produkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produks to delete
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to delete.
     */
    limit?: number
  }

  /**
   * produk.penjualan
   */
  export type produk$penjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    where?: penjualanWhereInput
    orderBy?: penjualanOrderByWithRelationInput | penjualanOrderByWithRelationInput[]
    cursor?: penjualanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * produk.pesanan
   */
  export type produk$pesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesanan
     */
    select?: pesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesanan
     */
    omit?: pesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesananInclude<ExtArgs> | null
    where?: pesananWhereInput
    orderBy?: pesananOrderByWithRelationInput | pesananOrderByWithRelationInput[]
    cursor?: pesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesananScalarFieldEnum | PesananScalarFieldEnum[]
  }

  /**
   * produk without action
   */
  export type produkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
  }


  /**
   * Model pelanggan
   */

  export type AggregatePelanggan = {
    _count: PelangganCountAggregateOutputType | null
    _min: PelangganMinAggregateOutputType | null
    _max: PelangganMaxAggregateOutputType | null
  }

  export type PelangganMinAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    alamat: string | null
    telepon: string | null
  }

  export type PelangganMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    alamat: string | null
    telepon: string | null
  }

  export type PelangganCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    alamat: number
    telepon: number
    _all: number
  }


  export type PelangganMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    alamat?: true
    telepon?: true
  }

  export type PelangganMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    alamat?: true
    telepon?: true
  }

  export type PelangganCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    alamat?: true
    telepon?: true
    _all?: true
  }

  export type PelangganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pelanggan to aggregate.
     */
    where?: pelangganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pelanggans to fetch.
     */
    orderBy?: pelangganOrderByWithRelationInput | pelangganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pelangganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pelanggans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pelanggans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pelanggans
    **/
    _count?: true | PelangganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PelangganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PelangganMaxAggregateInputType
  }

  export type GetPelangganAggregateType<T extends PelangganAggregateArgs> = {
        [P in keyof T & keyof AggregatePelanggan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePelanggan[P]>
      : GetScalarType<T[P], AggregatePelanggan[P]>
  }




  export type pelangganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pelangganWhereInput
    orderBy?: pelangganOrderByWithAggregationInput | pelangganOrderByWithAggregationInput[]
    by: PelangganScalarFieldEnum[] | PelangganScalarFieldEnum
    having?: pelangganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PelangganCountAggregateInputType | true
    _min?: PelangganMinAggregateInputType
    _max?: PelangganMaxAggregateInputType
  }

  export type PelangganGroupByOutputType = {
    id: string
    nama: string
    email: string
    alamat: string
    telepon: string
    _count: PelangganCountAggregateOutputType | null
    _min: PelangganMinAggregateOutputType | null
    _max: PelangganMaxAggregateOutputType | null
  }

  type GetPelangganGroupByPayload<T extends pelangganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PelangganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PelangganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PelangganGroupByOutputType[P]>
            : GetScalarType<T[P], PelangganGroupByOutputType[P]>
        }
      >
    >


  export type pelangganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    alamat?: boolean
    telepon?: boolean
    penjualan?: boolean | pelanggan$penjualanArgs<ExtArgs>
    _count?: boolean | PelangganCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pelanggan"]>

  export type pelangganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    alamat?: boolean
    telepon?: boolean
  }, ExtArgs["result"]["pelanggan"]>

  export type pelangganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    alamat?: boolean
    telepon?: boolean
  }, ExtArgs["result"]["pelanggan"]>

  export type pelangganSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    alamat?: boolean
    telepon?: boolean
  }

  export type pelangganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "alamat" | "telepon", ExtArgs["result"]["pelanggan"]>
  export type pelangganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualan?: boolean | pelanggan$penjualanArgs<ExtArgs>
    _count?: boolean | PelangganCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pelangganIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type pelangganIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $pelangganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pelanggan"
    objects: {
      penjualan: Prisma.$penjualanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      email: string
      alamat: string
      telepon: string
    }, ExtArgs["result"]["pelanggan"]>
    composites: {}
  }

  type pelangganGetPayload<S extends boolean | null | undefined | pelangganDefaultArgs> = $Result.GetResult<Prisma.$pelangganPayload, S>

  type pelangganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pelangganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PelangganCountAggregateInputType | true
    }

  export interface pelangganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pelanggan'], meta: { name: 'pelanggan' } }
    /**
     * Find zero or one Pelanggan that matches the filter.
     * @param {pelangganFindUniqueArgs} args - Arguments to find a Pelanggan
     * @example
     * // Get one Pelanggan
     * const pelanggan = await prisma.pelanggan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pelangganFindUniqueArgs>(args: SelectSubset<T, pelangganFindUniqueArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pelanggan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pelangganFindUniqueOrThrowArgs} args - Arguments to find a Pelanggan
     * @example
     * // Get one Pelanggan
     * const pelanggan = await prisma.pelanggan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pelangganFindUniqueOrThrowArgs>(args: SelectSubset<T, pelangganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pelanggan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganFindFirstArgs} args - Arguments to find a Pelanggan
     * @example
     * // Get one Pelanggan
     * const pelanggan = await prisma.pelanggan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pelangganFindFirstArgs>(args?: SelectSubset<T, pelangganFindFirstArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pelanggan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganFindFirstOrThrowArgs} args - Arguments to find a Pelanggan
     * @example
     * // Get one Pelanggan
     * const pelanggan = await prisma.pelanggan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pelangganFindFirstOrThrowArgs>(args?: SelectSubset<T, pelangganFindFirstOrThrowArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pelanggans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pelanggans
     * const pelanggans = await prisma.pelanggan.findMany()
     * 
     * // Get first 10 Pelanggans
     * const pelanggans = await prisma.pelanggan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pelangganWithIdOnly = await prisma.pelanggan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pelangganFindManyArgs>(args?: SelectSubset<T, pelangganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pelanggan.
     * @param {pelangganCreateArgs} args - Arguments to create a Pelanggan.
     * @example
     * // Create one Pelanggan
     * const Pelanggan = await prisma.pelanggan.create({
     *   data: {
     *     // ... data to create a Pelanggan
     *   }
     * })
     * 
     */
    create<T extends pelangganCreateArgs>(args: SelectSubset<T, pelangganCreateArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pelanggans.
     * @param {pelangganCreateManyArgs} args - Arguments to create many Pelanggans.
     * @example
     * // Create many Pelanggans
     * const pelanggan = await prisma.pelanggan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pelangganCreateManyArgs>(args?: SelectSubset<T, pelangganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pelanggans and returns the data saved in the database.
     * @param {pelangganCreateManyAndReturnArgs} args - Arguments to create many Pelanggans.
     * @example
     * // Create many Pelanggans
     * const pelanggan = await prisma.pelanggan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pelanggans and only return the `id`
     * const pelangganWithIdOnly = await prisma.pelanggan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pelangganCreateManyAndReturnArgs>(args?: SelectSubset<T, pelangganCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pelanggan.
     * @param {pelangganDeleteArgs} args - Arguments to delete one Pelanggan.
     * @example
     * // Delete one Pelanggan
     * const Pelanggan = await prisma.pelanggan.delete({
     *   where: {
     *     // ... filter to delete one Pelanggan
     *   }
     * })
     * 
     */
    delete<T extends pelangganDeleteArgs>(args: SelectSubset<T, pelangganDeleteArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pelanggan.
     * @param {pelangganUpdateArgs} args - Arguments to update one Pelanggan.
     * @example
     * // Update one Pelanggan
     * const pelanggan = await prisma.pelanggan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pelangganUpdateArgs>(args: SelectSubset<T, pelangganUpdateArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pelanggans.
     * @param {pelangganDeleteManyArgs} args - Arguments to filter Pelanggans to delete.
     * @example
     * // Delete a few Pelanggans
     * const { count } = await prisma.pelanggan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pelangganDeleteManyArgs>(args?: SelectSubset<T, pelangganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pelanggans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pelanggans
     * const pelanggan = await prisma.pelanggan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pelangganUpdateManyArgs>(args: SelectSubset<T, pelangganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pelanggans and returns the data updated in the database.
     * @param {pelangganUpdateManyAndReturnArgs} args - Arguments to update many Pelanggans.
     * @example
     * // Update many Pelanggans
     * const pelanggan = await prisma.pelanggan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pelanggans and only return the `id`
     * const pelangganWithIdOnly = await prisma.pelanggan.updateManyAndReturn({
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
    updateManyAndReturn<T extends pelangganUpdateManyAndReturnArgs>(args: SelectSubset<T, pelangganUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pelanggan.
     * @param {pelangganUpsertArgs} args - Arguments to update or create a Pelanggan.
     * @example
     * // Update or create a Pelanggan
     * const pelanggan = await prisma.pelanggan.upsert({
     *   create: {
     *     // ... data to create a Pelanggan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pelanggan we want to update
     *   }
     * })
     */
    upsert<T extends pelangganUpsertArgs>(args: SelectSubset<T, pelangganUpsertArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pelanggans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganCountArgs} args - Arguments to filter Pelanggans to count.
     * @example
     * // Count the number of Pelanggans
     * const count = await prisma.pelanggan.count({
     *   where: {
     *     // ... the filter for the Pelanggans we want to count
     *   }
     * })
    **/
    count<T extends pelangganCountArgs>(
      args?: Subset<T, pelangganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PelangganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pelanggan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PelangganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PelangganAggregateArgs>(args: Subset<T, PelangganAggregateArgs>): Prisma.PrismaPromise<GetPelangganAggregateType<T>>

    /**
     * Group by Pelanggan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganGroupByArgs} args - Group by arguments.
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
      T extends pelangganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pelangganGroupByArgs['orderBy'] }
        : { orderBy?: pelangganGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pelangganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPelangganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pelanggan model
   */
  readonly fields: pelangganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pelanggan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pelangganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penjualan<T extends pelanggan$penjualanArgs<ExtArgs> = {}>(args?: Subset<T, pelanggan$penjualanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pelanggan model
   */
  interface pelangganFieldRefs {
    readonly id: FieldRef<"pelanggan", 'String'>
    readonly nama: FieldRef<"pelanggan", 'String'>
    readonly email: FieldRef<"pelanggan", 'String'>
    readonly alamat: FieldRef<"pelanggan", 'String'>
    readonly telepon: FieldRef<"pelanggan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pelanggan findUnique
   */
  export type pelangganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * Filter, which pelanggan to fetch.
     */
    where: pelangganWhereUniqueInput
  }

  /**
   * pelanggan findUniqueOrThrow
   */
  export type pelangganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * Filter, which pelanggan to fetch.
     */
    where: pelangganWhereUniqueInput
  }

  /**
   * pelanggan findFirst
   */
  export type pelangganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * Filter, which pelanggan to fetch.
     */
    where?: pelangganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pelanggans to fetch.
     */
    orderBy?: pelangganOrderByWithRelationInput | pelangganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pelanggans.
     */
    cursor?: pelangganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pelanggans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pelanggans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pelanggans.
     */
    distinct?: PelangganScalarFieldEnum | PelangganScalarFieldEnum[]
  }

  /**
   * pelanggan findFirstOrThrow
   */
  export type pelangganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * Filter, which pelanggan to fetch.
     */
    where?: pelangganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pelanggans to fetch.
     */
    orderBy?: pelangganOrderByWithRelationInput | pelangganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pelanggans.
     */
    cursor?: pelangganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pelanggans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pelanggans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pelanggans.
     */
    distinct?: PelangganScalarFieldEnum | PelangganScalarFieldEnum[]
  }

  /**
   * pelanggan findMany
   */
  export type pelangganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * Filter, which pelanggans to fetch.
     */
    where?: pelangganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pelanggans to fetch.
     */
    orderBy?: pelangganOrderByWithRelationInput | pelangganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pelanggans.
     */
    cursor?: pelangganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pelanggans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pelanggans.
     */
    skip?: number
    distinct?: PelangganScalarFieldEnum | PelangganScalarFieldEnum[]
  }

  /**
   * pelanggan create
   */
  export type pelangganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * The data needed to create a pelanggan.
     */
    data: XOR<pelangganCreateInput, pelangganUncheckedCreateInput>
  }

  /**
   * pelanggan createMany
   */
  export type pelangganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pelanggans.
     */
    data: pelangganCreateManyInput | pelangganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pelanggan createManyAndReturn
   */
  export type pelangganCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * The data used to create many pelanggans.
     */
    data: pelangganCreateManyInput | pelangganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pelanggan update
   */
  export type pelangganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * The data needed to update a pelanggan.
     */
    data: XOR<pelangganUpdateInput, pelangganUncheckedUpdateInput>
    /**
     * Choose, which pelanggan to update.
     */
    where: pelangganWhereUniqueInput
  }

  /**
   * pelanggan updateMany
   */
  export type pelangganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pelanggans.
     */
    data: XOR<pelangganUpdateManyMutationInput, pelangganUncheckedUpdateManyInput>
    /**
     * Filter which pelanggans to update
     */
    where?: pelangganWhereInput
    /**
     * Limit how many pelanggans to update.
     */
    limit?: number
  }

  /**
   * pelanggan updateManyAndReturn
   */
  export type pelangganUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * The data used to update pelanggans.
     */
    data: XOR<pelangganUpdateManyMutationInput, pelangganUncheckedUpdateManyInput>
    /**
     * Filter which pelanggans to update
     */
    where?: pelangganWhereInput
    /**
     * Limit how many pelanggans to update.
     */
    limit?: number
  }

  /**
   * pelanggan upsert
   */
  export type pelangganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * The filter to search for the pelanggan to update in case it exists.
     */
    where: pelangganWhereUniqueInput
    /**
     * In case the pelanggan found by the `where` argument doesn't exist, create a new pelanggan with this data.
     */
    create: XOR<pelangganCreateInput, pelangganUncheckedCreateInput>
    /**
     * In case the pelanggan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pelangganUpdateInput, pelangganUncheckedUpdateInput>
  }

  /**
   * pelanggan delete
   */
  export type pelangganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * Filter which pelanggan to delete.
     */
    where: pelangganWhereUniqueInput
  }

  /**
   * pelanggan deleteMany
   */
  export type pelangganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pelanggans to delete
     */
    where?: pelangganWhereInput
    /**
     * Limit how many pelanggans to delete.
     */
    limit?: number
  }

  /**
   * pelanggan.penjualan
   */
  export type pelanggan$penjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    where?: penjualanWhereInput
    orderBy?: penjualanOrderByWithRelationInput | penjualanOrderByWithRelationInput[]
    cursor?: penjualanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * pelanggan without action
   */
  export type pelangganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
  }


  /**
   * Model penjualan
   */

  export type AggregatePenjualan = {
    _count: PenjualanCountAggregateOutputType | null
    _avg: PenjualanAvgAggregateOutputType | null
    _sum: PenjualanSumAggregateOutputType | null
    _min: PenjualanMinAggregateOutputType | null
    _max: PenjualanMaxAggregateOutputType | null
  }

  export type PenjualanAvgAggregateOutputType = {
    jumlah: number | null
    total: number | null
  }

  export type PenjualanSumAggregateOutputType = {
    jumlah: number | null
    total: number | null
  }

  export type PenjualanMinAggregateOutputType = {
    id: string | null
    pelanggan_id: string | null
    produk_id: string | null
    jumlah: number | null
    total: number | null
    status: string | null
    tanggal: Date | null
  }

  export type PenjualanMaxAggregateOutputType = {
    id: string | null
    pelanggan_id: string | null
    produk_id: string | null
    jumlah: number | null
    total: number | null
    status: string | null
    tanggal: Date | null
  }

  export type PenjualanCountAggregateOutputType = {
    id: number
    pelanggan_id: number
    produk_id: number
    jumlah: number
    total: number
    status: number
    tanggal: number
    _all: number
  }


  export type PenjualanAvgAggregateInputType = {
    jumlah?: true
    total?: true
  }

  export type PenjualanSumAggregateInputType = {
    jumlah?: true
    total?: true
  }

  export type PenjualanMinAggregateInputType = {
    id?: true
    pelanggan_id?: true
    produk_id?: true
    jumlah?: true
    total?: true
    status?: true
    tanggal?: true
  }

  export type PenjualanMaxAggregateInputType = {
    id?: true
    pelanggan_id?: true
    produk_id?: true
    jumlah?: true
    total?: true
    status?: true
    tanggal?: true
  }

  export type PenjualanCountAggregateInputType = {
    id?: true
    pelanggan_id?: true
    produk_id?: true
    jumlah?: true
    total?: true
    status?: true
    tanggal?: true
    _all?: true
  }

  export type PenjualanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penjualan to aggregate.
     */
    where?: penjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualans to fetch.
     */
    orderBy?: penjualanOrderByWithRelationInput | penjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: penjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned penjualans
    **/
    _count?: true | PenjualanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenjualanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenjualanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenjualanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenjualanMaxAggregateInputType
  }

  export type GetPenjualanAggregateType<T extends PenjualanAggregateArgs> = {
        [P in keyof T & keyof AggregatePenjualan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenjualan[P]>
      : GetScalarType<T[P], AggregatePenjualan[P]>
  }




  export type penjualanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penjualanWhereInput
    orderBy?: penjualanOrderByWithAggregationInput | penjualanOrderByWithAggregationInput[]
    by: PenjualanScalarFieldEnum[] | PenjualanScalarFieldEnum
    having?: penjualanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenjualanCountAggregateInputType | true
    _avg?: PenjualanAvgAggregateInputType
    _sum?: PenjualanSumAggregateInputType
    _min?: PenjualanMinAggregateInputType
    _max?: PenjualanMaxAggregateInputType
  }

  export type PenjualanGroupByOutputType = {
    id: string
    pelanggan_id: string
    produk_id: string
    jumlah: number
    total: number
    status: string
    tanggal: Date
    _count: PenjualanCountAggregateOutputType | null
    _avg: PenjualanAvgAggregateOutputType | null
    _sum: PenjualanSumAggregateOutputType | null
    _min: PenjualanMinAggregateOutputType | null
    _max: PenjualanMaxAggregateOutputType | null
  }

  type GetPenjualanGroupByPayload<T extends penjualanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenjualanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenjualanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenjualanGroupByOutputType[P]>
            : GetScalarType<T[P], PenjualanGroupByOutputType[P]>
        }
      >
    >


  export type penjualanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pelanggan_id?: boolean
    produk_id?: boolean
    jumlah?: boolean
    total?: boolean
    status?: boolean
    tanggal?: boolean
    pelanggan?: boolean | pelangganDefaultArgs<ExtArgs>
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualan"]>

  export type penjualanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pelanggan_id?: boolean
    produk_id?: boolean
    jumlah?: boolean
    total?: boolean
    status?: boolean
    tanggal?: boolean
    pelanggan?: boolean | pelangganDefaultArgs<ExtArgs>
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualan"]>

  export type penjualanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pelanggan_id?: boolean
    produk_id?: boolean
    jumlah?: boolean
    total?: boolean
    status?: boolean
    tanggal?: boolean
    pelanggan?: boolean | pelangganDefaultArgs<ExtArgs>
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualan"]>

  export type penjualanSelectScalar = {
    id?: boolean
    pelanggan_id?: boolean
    produk_id?: boolean
    jumlah?: boolean
    total?: boolean
    status?: boolean
    tanggal?: boolean
  }

  export type penjualanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pelanggan_id" | "produk_id" | "jumlah" | "total" | "status" | "tanggal", ExtArgs["result"]["penjualan"]>
  export type penjualanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pelanggan?: boolean | pelangganDefaultArgs<ExtArgs>
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }
  export type penjualanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pelanggan?: boolean | pelangganDefaultArgs<ExtArgs>
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }
  export type penjualanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pelanggan?: boolean | pelangganDefaultArgs<ExtArgs>
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }

  export type $penjualanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "penjualan"
    objects: {
      pelanggan: Prisma.$pelangganPayload<ExtArgs>
      produk: Prisma.$produkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pelanggan_id: string
      produk_id: string
      jumlah: number
      total: number
      status: string
      tanggal: Date
    }, ExtArgs["result"]["penjualan"]>
    composites: {}
  }

  type penjualanGetPayload<S extends boolean | null | undefined | penjualanDefaultArgs> = $Result.GetResult<Prisma.$penjualanPayload, S>

  type penjualanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<penjualanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenjualanCountAggregateInputType | true
    }

  export interface penjualanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['penjualan'], meta: { name: 'penjualan' } }
    /**
     * Find zero or one Penjualan that matches the filter.
     * @param {penjualanFindUniqueArgs} args - Arguments to find a Penjualan
     * @example
     * // Get one Penjualan
     * const penjualan = await prisma.penjualan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends penjualanFindUniqueArgs>(args: SelectSubset<T, penjualanFindUniqueArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Penjualan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {penjualanFindUniqueOrThrowArgs} args - Arguments to find a Penjualan
     * @example
     * // Get one Penjualan
     * const penjualan = await prisma.penjualan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends penjualanFindUniqueOrThrowArgs>(args: SelectSubset<T, penjualanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penjualan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanFindFirstArgs} args - Arguments to find a Penjualan
     * @example
     * // Get one Penjualan
     * const penjualan = await prisma.penjualan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends penjualanFindFirstArgs>(args?: SelectSubset<T, penjualanFindFirstArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penjualan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanFindFirstOrThrowArgs} args - Arguments to find a Penjualan
     * @example
     * // Get one Penjualan
     * const penjualan = await prisma.penjualan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends penjualanFindFirstOrThrowArgs>(args?: SelectSubset<T, penjualanFindFirstOrThrowArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penjualans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penjualans
     * const penjualans = await prisma.penjualan.findMany()
     * 
     * // Get first 10 Penjualans
     * const penjualans = await prisma.penjualan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penjualanWithIdOnly = await prisma.penjualan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends penjualanFindManyArgs>(args?: SelectSubset<T, penjualanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Penjualan.
     * @param {penjualanCreateArgs} args - Arguments to create a Penjualan.
     * @example
     * // Create one Penjualan
     * const Penjualan = await prisma.penjualan.create({
     *   data: {
     *     // ... data to create a Penjualan
     *   }
     * })
     * 
     */
    create<T extends penjualanCreateArgs>(args: SelectSubset<T, penjualanCreateArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penjualans.
     * @param {penjualanCreateManyArgs} args - Arguments to create many Penjualans.
     * @example
     * // Create many Penjualans
     * const penjualan = await prisma.penjualan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends penjualanCreateManyArgs>(args?: SelectSubset<T, penjualanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Penjualans and returns the data saved in the database.
     * @param {penjualanCreateManyAndReturnArgs} args - Arguments to create many Penjualans.
     * @example
     * // Create many Penjualans
     * const penjualan = await prisma.penjualan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Penjualans and only return the `id`
     * const penjualanWithIdOnly = await prisma.penjualan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends penjualanCreateManyAndReturnArgs>(args?: SelectSubset<T, penjualanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Penjualan.
     * @param {penjualanDeleteArgs} args - Arguments to delete one Penjualan.
     * @example
     * // Delete one Penjualan
     * const Penjualan = await prisma.penjualan.delete({
     *   where: {
     *     // ... filter to delete one Penjualan
     *   }
     * })
     * 
     */
    delete<T extends penjualanDeleteArgs>(args: SelectSubset<T, penjualanDeleteArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Penjualan.
     * @param {penjualanUpdateArgs} args - Arguments to update one Penjualan.
     * @example
     * // Update one Penjualan
     * const penjualan = await prisma.penjualan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends penjualanUpdateArgs>(args: SelectSubset<T, penjualanUpdateArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penjualans.
     * @param {penjualanDeleteManyArgs} args - Arguments to filter Penjualans to delete.
     * @example
     * // Delete a few Penjualans
     * const { count } = await prisma.penjualan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends penjualanDeleteManyArgs>(args?: SelectSubset<T, penjualanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penjualans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penjualans
     * const penjualan = await prisma.penjualan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends penjualanUpdateManyArgs>(args: SelectSubset<T, penjualanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penjualans and returns the data updated in the database.
     * @param {penjualanUpdateManyAndReturnArgs} args - Arguments to update many Penjualans.
     * @example
     * // Update many Penjualans
     * const penjualan = await prisma.penjualan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Penjualans and only return the `id`
     * const penjualanWithIdOnly = await prisma.penjualan.updateManyAndReturn({
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
    updateManyAndReturn<T extends penjualanUpdateManyAndReturnArgs>(args: SelectSubset<T, penjualanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Penjualan.
     * @param {penjualanUpsertArgs} args - Arguments to update or create a Penjualan.
     * @example
     * // Update or create a Penjualan
     * const penjualan = await prisma.penjualan.upsert({
     *   create: {
     *     // ... data to create a Penjualan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penjualan we want to update
     *   }
     * })
     */
    upsert<T extends penjualanUpsertArgs>(args: SelectSubset<T, penjualanUpsertArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penjualans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanCountArgs} args - Arguments to filter Penjualans to count.
     * @example
     * // Count the number of Penjualans
     * const count = await prisma.penjualan.count({
     *   where: {
     *     // ... the filter for the Penjualans we want to count
     *   }
     * })
    **/
    count<T extends penjualanCountArgs>(
      args?: Subset<T, penjualanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenjualanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penjualan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenjualanAggregateArgs>(args: Subset<T, PenjualanAggregateArgs>): Prisma.PrismaPromise<GetPenjualanAggregateType<T>>

    /**
     * Group by Penjualan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanGroupByArgs} args - Group by arguments.
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
      T extends penjualanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: penjualanGroupByArgs['orderBy'] }
        : { orderBy?: penjualanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, penjualanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenjualanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the penjualan model
   */
  readonly fields: penjualanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for penjualan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__penjualanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pelanggan<T extends pelangganDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pelangganDefaultArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produk<T extends produkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produkDefaultArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the penjualan model
   */
  interface penjualanFieldRefs {
    readonly id: FieldRef<"penjualan", 'String'>
    readonly pelanggan_id: FieldRef<"penjualan", 'String'>
    readonly produk_id: FieldRef<"penjualan", 'String'>
    readonly jumlah: FieldRef<"penjualan", 'Int'>
    readonly total: FieldRef<"penjualan", 'Int'>
    readonly status: FieldRef<"penjualan", 'String'>
    readonly tanggal: FieldRef<"penjualan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * penjualan findUnique
   */
  export type penjualanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * Filter, which penjualan to fetch.
     */
    where: penjualanWhereUniqueInput
  }

  /**
   * penjualan findUniqueOrThrow
   */
  export type penjualanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * Filter, which penjualan to fetch.
     */
    where: penjualanWhereUniqueInput
  }

  /**
   * penjualan findFirst
   */
  export type penjualanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * Filter, which penjualan to fetch.
     */
    where?: penjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualans to fetch.
     */
    orderBy?: penjualanOrderByWithRelationInput | penjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penjualans.
     */
    cursor?: penjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penjualans.
     */
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * penjualan findFirstOrThrow
   */
  export type penjualanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * Filter, which penjualan to fetch.
     */
    where?: penjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualans to fetch.
     */
    orderBy?: penjualanOrderByWithRelationInput | penjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penjualans.
     */
    cursor?: penjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penjualans.
     */
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * penjualan findMany
   */
  export type penjualanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * Filter, which penjualans to fetch.
     */
    where?: penjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualans to fetch.
     */
    orderBy?: penjualanOrderByWithRelationInput | penjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing penjualans.
     */
    cursor?: penjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualans.
     */
    skip?: number
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * penjualan create
   */
  export type penjualanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * The data needed to create a penjualan.
     */
    data: XOR<penjualanCreateInput, penjualanUncheckedCreateInput>
  }

  /**
   * penjualan createMany
   */
  export type penjualanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many penjualans.
     */
    data: penjualanCreateManyInput | penjualanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * penjualan createManyAndReturn
   */
  export type penjualanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * The data used to create many penjualans.
     */
    data: penjualanCreateManyInput | penjualanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * penjualan update
   */
  export type penjualanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * The data needed to update a penjualan.
     */
    data: XOR<penjualanUpdateInput, penjualanUncheckedUpdateInput>
    /**
     * Choose, which penjualan to update.
     */
    where: penjualanWhereUniqueInput
  }

  /**
   * penjualan updateMany
   */
  export type penjualanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update penjualans.
     */
    data: XOR<penjualanUpdateManyMutationInput, penjualanUncheckedUpdateManyInput>
    /**
     * Filter which penjualans to update
     */
    where?: penjualanWhereInput
    /**
     * Limit how many penjualans to update.
     */
    limit?: number
  }

  /**
   * penjualan updateManyAndReturn
   */
  export type penjualanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * The data used to update penjualans.
     */
    data: XOR<penjualanUpdateManyMutationInput, penjualanUncheckedUpdateManyInput>
    /**
     * Filter which penjualans to update
     */
    where?: penjualanWhereInput
    /**
     * Limit how many penjualans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * penjualan upsert
   */
  export type penjualanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * The filter to search for the penjualan to update in case it exists.
     */
    where: penjualanWhereUniqueInput
    /**
     * In case the penjualan found by the `where` argument doesn't exist, create a new penjualan with this data.
     */
    create: XOR<penjualanCreateInput, penjualanUncheckedCreateInput>
    /**
     * In case the penjualan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<penjualanUpdateInput, penjualanUncheckedUpdateInput>
  }

  /**
   * penjualan delete
   */
  export type penjualanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * Filter which penjualan to delete.
     */
    where: penjualanWhereUniqueInput
  }

  /**
   * penjualan deleteMany
   */
  export type penjualanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penjualans to delete
     */
    where?: penjualanWhereInput
    /**
     * Limit how many penjualans to delete.
     */
    limit?: number
  }

  /**
   * penjualan without action
   */
  export type penjualanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
  }


  /**
   * Model pendapatan
   */

  export type AggregatePendapatan = {
    _count: PendapatanCountAggregateOutputType | null
    _avg: PendapatanAvgAggregateOutputType | null
    _sum: PendapatanSumAggregateOutputType | null
    _min: PendapatanMinAggregateOutputType | null
    _max: PendapatanMaxAggregateOutputType | null
  }

  export type PendapatanAvgAggregateOutputType = {
    pendapatan: number | null
  }

  export type PendapatanSumAggregateOutputType = {
    pendapatan: number | null
  }

  export type PendapatanMinAggregateOutputType = {
    bulan: string | null
    pendapatan: number | null
  }

  export type PendapatanMaxAggregateOutputType = {
    bulan: string | null
    pendapatan: number | null
  }

  export type PendapatanCountAggregateOutputType = {
    bulan: number
    pendapatan: number
    _all: number
  }


  export type PendapatanAvgAggregateInputType = {
    pendapatan?: true
  }

  export type PendapatanSumAggregateInputType = {
    pendapatan?: true
  }

  export type PendapatanMinAggregateInputType = {
    bulan?: true
    pendapatan?: true
  }

  export type PendapatanMaxAggregateInputType = {
    bulan?: true
    pendapatan?: true
  }

  export type PendapatanCountAggregateInputType = {
    bulan?: true
    pendapatan?: true
    _all?: true
  }

  export type PendapatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pendapatan to aggregate.
     */
    where?: pendapatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendapatans to fetch.
     */
    orderBy?: pendapatanOrderByWithRelationInput | pendapatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pendapatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendapatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendapatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pendapatans
    **/
    _count?: true | PendapatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendapatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendapatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendapatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendapatanMaxAggregateInputType
  }

  export type GetPendapatanAggregateType<T extends PendapatanAggregateArgs> = {
        [P in keyof T & keyof AggregatePendapatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendapatan[P]>
      : GetScalarType<T[P], AggregatePendapatan[P]>
  }




  export type pendapatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pendapatanWhereInput
    orderBy?: pendapatanOrderByWithAggregationInput | pendapatanOrderByWithAggregationInput[]
    by: PendapatanScalarFieldEnum[] | PendapatanScalarFieldEnum
    having?: pendapatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendapatanCountAggregateInputType | true
    _avg?: PendapatanAvgAggregateInputType
    _sum?: PendapatanSumAggregateInputType
    _min?: PendapatanMinAggregateInputType
    _max?: PendapatanMaxAggregateInputType
  }

  export type PendapatanGroupByOutputType = {
    bulan: string
    pendapatan: number
    _count: PendapatanCountAggregateOutputType | null
    _avg: PendapatanAvgAggregateOutputType | null
    _sum: PendapatanSumAggregateOutputType | null
    _min: PendapatanMinAggregateOutputType | null
    _max: PendapatanMaxAggregateOutputType | null
  }

  type GetPendapatanGroupByPayload<T extends pendapatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendapatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendapatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendapatanGroupByOutputType[P]>
            : GetScalarType<T[P], PendapatanGroupByOutputType[P]>
        }
      >
    >


  export type pendapatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bulan?: boolean
    pendapatan?: boolean
  }, ExtArgs["result"]["pendapatan"]>

  export type pendapatanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bulan?: boolean
    pendapatan?: boolean
  }, ExtArgs["result"]["pendapatan"]>

  export type pendapatanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bulan?: boolean
    pendapatan?: boolean
  }, ExtArgs["result"]["pendapatan"]>

  export type pendapatanSelectScalar = {
    bulan?: boolean
    pendapatan?: boolean
  }

  export type pendapatanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bulan" | "pendapatan", ExtArgs["result"]["pendapatan"]>

  export type $pendapatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pendapatan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      bulan: string
      pendapatan: number
    }, ExtArgs["result"]["pendapatan"]>
    composites: {}
  }

  type pendapatanGetPayload<S extends boolean | null | undefined | pendapatanDefaultArgs> = $Result.GetResult<Prisma.$pendapatanPayload, S>

  type pendapatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pendapatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendapatanCountAggregateInputType | true
    }

  export interface pendapatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pendapatan'], meta: { name: 'pendapatan' } }
    /**
     * Find zero or one Pendapatan that matches the filter.
     * @param {pendapatanFindUniqueArgs} args - Arguments to find a Pendapatan
     * @example
     * // Get one Pendapatan
     * const pendapatan = await prisma.pendapatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pendapatanFindUniqueArgs>(args: SelectSubset<T, pendapatanFindUniqueArgs<ExtArgs>>): Prisma__pendapatanClient<$Result.GetResult<Prisma.$pendapatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pendapatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pendapatanFindUniqueOrThrowArgs} args - Arguments to find a Pendapatan
     * @example
     * // Get one Pendapatan
     * const pendapatan = await prisma.pendapatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pendapatanFindUniqueOrThrowArgs>(args: SelectSubset<T, pendapatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pendapatanClient<$Result.GetResult<Prisma.$pendapatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pendapatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendapatanFindFirstArgs} args - Arguments to find a Pendapatan
     * @example
     * // Get one Pendapatan
     * const pendapatan = await prisma.pendapatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pendapatanFindFirstArgs>(args?: SelectSubset<T, pendapatanFindFirstArgs<ExtArgs>>): Prisma__pendapatanClient<$Result.GetResult<Prisma.$pendapatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pendapatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendapatanFindFirstOrThrowArgs} args - Arguments to find a Pendapatan
     * @example
     * // Get one Pendapatan
     * const pendapatan = await prisma.pendapatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pendapatanFindFirstOrThrowArgs>(args?: SelectSubset<T, pendapatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__pendapatanClient<$Result.GetResult<Prisma.$pendapatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pendapatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendapatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pendapatans
     * const pendapatans = await prisma.pendapatan.findMany()
     * 
     * // Get first 10 Pendapatans
     * const pendapatans = await prisma.pendapatan.findMany({ take: 10 })
     * 
     * // Only select the `bulan`
     * const pendapatanWithBulanOnly = await prisma.pendapatan.findMany({ select: { bulan: true } })
     * 
     */
    findMany<T extends pendapatanFindManyArgs>(args?: SelectSubset<T, pendapatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendapatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pendapatan.
     * @param {pendapatanCreateArgs} args - Arguments to create a Pendapatan.
     * @example
     * // Create one Pendapatan
     * const Pendapatan = await prisma.pendapatan.create({
     *   data: {
     *     // ... data to create a Pendapatan
     *   }
     * })
     * 
     */
    create<T extends pendapatanCreateArgs>(args: SelectSubset<T, pendapatanCreateArgs<ExtArgs>>): Prisma__pendapatanClient<$Result.GetResult<Prisma.$pendapatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pendapatans.
     * @param {pendapatanCreateManyArgs} args - Arguments to create many Pendapatans.
     * @example
     * // Create many Pendapatans
     * const pendapatan = await prisma.pendapatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pendapatanCreateManyArgs>(args?: SelectSubset<T, pendapatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pendapatans and returns the data saved in the database.
     * @param {pendapatanCreateManyAndReturnArgs} args - Arguments to create many Pendapatans.
     * @example
     * // Create many Pendapatans
     * const pendapatan = await prisma.pendapatan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pendapatans and only return the `bulan`
     * const pendapatanWithBulanOnly = await prisma.pendapatan.createManyAndReturn({
     *   select: { bulan: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pendapatanCreateManyAndReturnArgs>(args?: SelectSubset<T, pendapatanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendapatanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pendapatan.
     * @param {pendapatanDeleteArgs} args - Arguments to delete one Pendapatan.
     * @example
     * // Delete one Pendapatan
     * const Pendapatan = await prisma.pendapatan.delete({
     *   where: {
     *     // ... filter to delete one Pendapatan
     *   }
     * })
     * 
     */
    delete<T extends pendapatanDeleteArgs>(args: SelectSubset<T, pendapatanDeleteArgs<ExtArgs>>): Prisma__pendapatanClient<$Result.GetResult<Prisma.$pendapatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pendapatan.
     * @param {pendapatanUpdateArgs} args - Arguments to update one Pendapatan.
     * @example
     * // Update one Pendapatan
     * const pendapatan = await prisma.pendapatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pendapatanUpdateArgs>(args: SelectSubset<T, pendapatanUpdateArgs<ExtArgs>>): Prisma__pendapatanClient<$Result.GetResult<Prisma.$pendapatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pendapatans.
     * @param {pendapatanDeleteManyArgs} args - Arguments to filter Pendapatans to delete.
     * @example
     * // Delete a few Pendapatans
     * const { count } = await prisma.pendapatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pendapatanDeleteManyArgs>(args?: SelectSubset<T, pendapatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendapatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendapatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pendapatans
     * const pendapatan = await prisma.pendapatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pendapatanUpdateManyArgs>(args: SelectSubset<T, pendapatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendapatans and returns the data updated in the database.
     * @param {pendapatanUpdateManyAndReturnArgs} args - Arguments to update many Pendapatans.
     * @example
     * // Update many Pendapatans
     * const pendapatan = await prisma.pendapatan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pendapatans and only return the `bulan`
     * const pendapatanWithBulanOnly = await prisma.pendapatan.updateManyAndReturn({
     *   select: { bulan: true },
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
    updateManyAndReturn<T extends pendapatanUpdateManyAndReturnArgs>(args: SelectSubset<T, pendapatanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendapatanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pendapatan.
     * @param {pendapatanUpsertArgs} args - Arguments to update or create a Pendapatan.
     * @example
     * // Update or create a Pendapatan
     * const pendapatan = await prisma.pendapatan.upsert({
     *   create: {
     *     // ... data to create a Pendapatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pendapatan we want to update
     *   }
     * })
     */
    upsert<T extends pendapatanUpsertArgs>(args: SelectSubset<T, pendapatanUpsertArgs<ExtArgs>>): Prisma__pendapatanClient<$Result.GetResult<Prisma.$pendapatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pendapatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendapatanCountArgs} args - Arguments to filter Pendapatans to count.
     * @example
     * // Count the number of Pendapatans
     * const count = await prisma.pendapatan.count({
     *   where: {
     *     // ... the filter for the Pendapatans we want to count
     *   }
     * })
    **/
    count<T extends pendapatanCountArgs>(
      args?: Subset<T, pendapatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendapatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pendapatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendapatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendapatanAggregateArgs>(args: Subset<T, PendapatanAggregateArgs>): Prisma.PrismaPromise<GetPendapatanAggregateType<T>>

    /**
     * Group by Pendapatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendapatanGroupByArgs} args - Group by arguments.
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
      T extends pendapatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pendapatanGroupByArgs['orderBy'] }
        : { orderBy?: pendapatanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pendapatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendapatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pendapatan model
   */
  readonly fields: pendapatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pendapatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pendapatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the pendapatan model
   */
  interface pendapatanFieldRefs {
    readonly bulan: FieldRef<"pendapatan", 'String'>
    readonly pendapatan: FieldRef<"pendapatan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pendapatan findUnique
   */
  export type pendapatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendapatan
     */
    select?: pendapatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendapatan
     */
    omit?: pendapatanOmit<ExtArgs> | null
    /**
     * Filter, which pendapatan to fetch.
     */
    where: pendapatanWhereUniqueInput
  }

  /**
   * pendapatan findUniqueOrThrow
   */
  export type pendapatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendapatan
     */
    select?: pendapatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendapatan
     */
    omit?: pendapatanOmit<ExtArgs> | null
    /**
     * Filter, which pendapatan to fetch.
     */
    where: pendapatanWhereUniqueInput
  }

  /**
   * pendapatan findFirst
   */
  export type pendapatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendapatan
     */
    select?: pendapatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendapatan
     */
    omit?: pendapatanOmit<ExtArgs> | null
    /**
     * Filter, which pendapatan to fetch.
     */
    where?: pendapatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendapatans to fetch.
     */
    orderBy?: pendapatanOrderByWithRelationInput | pendapatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pendapatans.
     */
    cursor?: pendapatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendapatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendapatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pendapatans.
     */
    distinct?: PendapatanScalarFieldEnum | PendapatanScalarFieldEnum[]
  }

  /**
   * pendapatan findFirstOrThrow
   */
  export type pendapatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendapatan
     */
    select?: pendapatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendapatan
     */
    omit?: pendapatanOmit<ExtArgs> | null
    /**
     * Filter, which pendapatan to fetch.
     */
    where?: pendapatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendapatans to fetch.
     */
    orderBy?: pendapatanOrderByWithRelationInput | pendapatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pendapatans.
     */
    cursor?: pendapatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendapatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendapatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pendapatans.
     */
    distinct?: PendapatanScalarFieldEnum | PendapatanScalarFieldEnum[]
  }

  /**
   * pendapatan findMany
   */
  export type pendapatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendapatan
     */
    select?: pendapatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendapatan
     */
    omit?: pendapatanOmit<ExtArgs> | null
    /**
     * Filter, which pendapatans to fetch.
     */
    where?: pendapatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendapatans to fetch.
     */
    orderBy?: pendapatanOrderByWithRelationInput | pendapatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pendapatans.
     */
    cursor?: pendapatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendapatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendapatans.
     */
    skip?: number
    distinct?: PendapatanScalarFieldEnum | PendapatanScalarFieldEnum[]
  }

  /**
   * pendapatan create
   */
  export type pendapatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendapatan
     */
    select?: pendapatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendapatan
     */
    omit?: pendapatanOmit<ExtArgs> | null
    /**
     * The data needed to create a pendapatan.
     */
    data: XOR<pendapatanCreateInput, pendapatanUncheckedCreateInput>
  }

  /**
   * pendapatan createMany
   */
  export type pendapatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pendapatans.
     */
    data: pendapatanCreateManyInput | pendapatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pendapatan createManyAndReturn
   */
  export type pendapatanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendapatan
     */
    select?: pendapatanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pendapatan
     */
    omit?: pendapatanOmit<ExtArgs> | null
    /**
     * The data used to create many pendapatans.
     */
    data: pendapatanCreateManyInput | pendapatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pendapatan update
   */
  export type pendapatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendapatan
     */
    select?: pendapatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendapatan
     */
    omit?: pendapatanOmit<ExtArgs> | null
    /**
     * The data needed to update a pendapatan.
     */
    data: XOR<pendapatanUpdateInput, pendapatanUncheckedUpdateInput>
    /**
     * Choose, which pendapatan to update.
     */
    where: pendapatanWhereUniqueInput
  }

  /**
   * pendapatan updateMany
   */
  export type pendapatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pendapatans.
     */
    data: XOR<pendapatanUpdateManyMutationInput, pendapatanUncheckedUpdateManyInput>
    /**
     * Filter which pendapatans to update
     */
    where?: pendapatanWhereInput
    /**
     * Limit how many pendapatans to update.
     */
    limit?: number
  }

  /**
   * pendapatan updateManyAndReturn
   */
  export type pendapatanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendapatan
     */
    select?: pendapatanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pendapatan
     */
    omit?: pendapatanOmit<ExtArgs> | null
    /**
     * The data used to update pendapatans.
     */
    data: XOR<pendapatanUpdateManyMutationInput, pendapatanUncheckedUpdateManyInput>
    /**
     * Filter which pendapatans to update
     */
    where?: pendapatanWhereInput
    /**
     * Limit how many pendapatans to update.
     */
    limit?: number
  }

  /**
   * pendapatan upsert
   */
  export type pendapatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendapatan
     */
    select?: pendapatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendapatan
     */
    omit?: pendapatanOmit<ExtArgs> | null
    /**
     * The filter to search for the pendapatan to update in case it exists.
     */
    where: pendapatanWhereUniqueInput
    /**
     * In case the pendapatan found by the `where` argument doesn't exist, create a new pendapatan with this data.
     */
    create: XOR<pendapatanCreateInput, pendapatanUncheckedCreateInput>
    /**
     * In case the pendapatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pendapatanUpdateInput, pendapatanUncheckedUpdateInput>
  }

  /**
   * pendapatan delete
   */
  export type pendapatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendapatan
     */
    select?: pendapatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendapatan
     */
    omit?: pendapatanOmit<ExtArgs> | null
    /**
     * Filter which pendapatan to delete.
     */
    where: pendapatanWhereUniqueInput
  }

  /**
   * pendapatan deleteMany
   */
  export type pendapatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pendapatans to delete
     */
    where?: pendapatanWhereInput
    /**
     * Limit how many pendapatans to delete.
     */
    limit?: number
  }

  /**
   * pendapatan without action
   */
  export type pendapatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendapatan
     */
    select?: pendapatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendapatan
     */
    omit?: pendapatanOmit<ExtArgs> | null
  }


  /**
   * Model rating_toko
   */

  export type AggregateRating_toko = {
    _count: Rating_tokoCountAggregateOutputType | null
    _avg: Rating_tokoAvgAggregateOutputType | null
    _sum: Rating_tokoSumAggregateOutputType | null
    _min: Rating_tokoMinAggregateOutputType | null
    _max: Rating_tokoMaxAggregateOutputType | null
  }

  export type Rating_tokoAvgAggregateOutputType = {
    nilai: number | null
  }

  export type Rating_tokoSumAggregateOutputType = {
    nilai: number | null
  }

  export type Rating_tokoMinAggregateOutputType = {
    id: string | null
    nilai: number | null
    bulan: string | null
    created_at: Date | null
  }

  export type Rating_tokoMaxAggregateOutputType = {
    id: string | null
    nilai: number | null
    bulan: string | null
    created_at: Date | null
  }

  export type Rating_tokoCountAggregateOutputType = {
    id: number
    nilai: number
    bulan: number
    created_at: number
    _all: number
  }


  export type Rating_tokoAvgAggregateInputType = {
    nilai?: true
  }

  export type Rating_tokoSumAggregateInputType = {
    nilai?: true
  }

  export type Rating_tokoMinAggregateInputType = {
    id?: true
    nilai?: true
    bulan?: true
    created_at?: true
  }

  export type Rating_tokoMaxAggregateInputType = {
    id?: true
    nilai?: true
    bulan?: true
    created_at?: true
  }

  export type Rating_tokoCountAggregateInputType = {
    id?: true
    nilai?: true
    bulan?: true
    created_at?: true
    _all?: true
  }

  export type Rating_tokoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rating_toko to aggregate.
     */
    where?: rating_tokoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rating_tokos to fetch.
     */
    orderBy?: rating_tokoOrderByWithRelationInput | rating_tokoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rating_tokoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rating_tokos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rating_tokos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rating_tokos
    **/
    _count?: true | Rating_tokoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rating_tokoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rating_tokoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rating_tokoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rating_tokoMaxAggregateInputType
  }

  export type GetRating_tokoAggregateType<T extends Rating_tokoAggregateArgs> = {
        [P in keyof T & keyof AggregateRating_toko]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating_toko[P]>
      : GetScalarType<T[P], AggregateRating_toko[P]>
  }




  export type rating_tokoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rating_tokoWhereInput
    orderBy?: rating_tokoOrderByWithAggregationInput | rating_tokoOrderByWithAggregationInput[]
    by: Rating_tokoScalarFieldEnum[] | Rating_tokoScalarFieldEnum
    having?: rating_tokoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rating_tokoCountAggregateInputType | true
    _avg?: Rating_tokoAvgAggregateInputType
    _sum?: Rating_tokoSumAggregateInputType
    _min?: Rating_tokoMinAggregateInputType
    _max?: Rating_tokoMaxAggregateInputType
  }

  export type Rating_tokoGroupByOutputType = {
    id: string
    nilai: number
    bulan: string
    created_at: Date
    _count: Rating_tokoCountAggregateOutputType | null
    _avg: Rating_tokoAvgAggregateOutputType | null
    _sum: Rating_tokoSumAggregateOutputType | null
    _min: Rating_tokoMinAggregateOutputType | null
    _max: Rating_tokoMaxAggregateOutputType | null
  }

  type GetRating_tokoGroupByPayload<T extends rating_tokoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rating_tokoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rating_tokoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rating_tokoGroupByOutputType[P]>
            : GetScalarType<T[P], Rating_tokoGroupByOutputType[P]>
        }
      >
    >


  export type rating_tokoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nilai?: boolean
    bulan?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["rating_toko"]>

  export type rating_tokoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nilai?: boolean
    bulan?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["rating_toko"]>

  export type rating_tokoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nilai?: boolean
    bulan?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["rating_toko"]>

  export type rating_tokoSelectScalar = {
    id?: boolean
    nilai?: boolean
    bulan?: boolean
    created_at?: boolean
  }

  export type rating_tokoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nilai" | "bulan" | "created_at", ExtArgs["result"]["rating_toko"]>

  export type $rating_tokoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rating_toko"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nilai: number
      bulan: string
      created_at: Date
    }, ExtArgs["result"]["rating_toko"]>
    composites: {}
  }

  type rating_tokoGetPayload<S extends boolean | null | undefined | rating_tokoDefaultArgs> = $Result.GetResult<Prisma.$rating_tokoPayload, S>

  type rating_tokoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rating_tokoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rating_tokoCountAggregateInputType | true
    }

  export interface rating_tokoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rating_toko'], meta: { name: 'rating_toko' } }
    /**
     * Find zero or one Rating_toko that matches the filter.
     * @param {rating_tokoFindUniqueArgs} args - Arguments to find a Rating_toko
     * @example
     * // Get one Rating_toko
     * const rating_toko = await prisma.rating_toko.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rating_tokoFindUniqueArgs>(args: SelectSubset<T, rating_tokoFindUniqueArgs<ExtArgs>>): Prisma__rating_tokoClient<$Result.GetResult<Prisma.$rating_tokoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating_toko that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rating_tokoFindUniqueOrThrowArgs} args - Arguments to find a Rating_toko
     * @example
     * // Get one Rating_toko
     * const rating_toko = await prisma.rating_toko.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rating_tokoFindUniqueOrThrowArgs>(args: SelectSubset<T, rating_tokoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rating_tokoClient<$Result.GetResult<Prisma.$rating_tokoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating_toko that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_tokoFindFirstArgs} args - Arguments to find a Rating_toko
     * @example
     * // Get one Rating_toko
     * const rating_toko = await prisma.rating_toko.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rating_tokoFindFirstArgs>(args?: SelectSubset<T, rating_tokoFindFirstArgs<ExtArgs>>): Prisma__rating_tokoClient<$Result.GetResult<Prisma.$rating_tokoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating_toko that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_tokoFindFirstOrThrowArgs} args - Arguments to find a Rating_toko
     * @example
     * // Get one Rating_toko
     * const rating_toko = await prisma.rating_toko.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rating_tokoFindFirstOrThrowArgs>(args?: SelectSubset<T, rating_tokoFindFirstOrThrowArgs<ExtArgs>>): Prisma__rating_tokoClient<$Result.GetResult<Prisma.$rating_tokoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rating_tokos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_tokoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rating_tokos
     * const rating_tokos = await prisma.rating_toko.findMany()
     * 
     * // Get first 10 Rating_tokos
     * const rating_tokos = await prisma.rating_toko.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rating_tokoWithIdOnly = await prisma.rating_toko.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rating_tokoFindManyArgs>(args?: SelectSubset<T, rating_tokoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rating_tokoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating_toko.
     * @param {rating_tokoCreateArgs} args - Arguments to create a Rating_toko.
     * @example
     * // Create one Rating_toko
     * const Rating_toko = await prisma.rating_toko.create({
     *   data: {
     *     // ... data to create a Rating_toko
     *   }
     * })
     * 
     */
    create<T extends rating_tokoCreateArgs>(args: SelectSubset<T, rating_tokoCreateArgs<ExtArgs>>): Prisma__rating_tokoClient<$Result.GetResult<Prisma.$rating_tokoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rating_tokos.
     * @param {rating_tokoCreateManyArgs} args - Arguments to create many Rating_tokos.
     * @example
     * // Create many Rating_tokos
     * const rating_toko = await prisma.rating_toko.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rating_tokoCreateManyArgs>(args?: SelectSubset<T, rating_tokoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rating_tokos and returns the data saved in the database.
     * @param {rating_tokoCreateManyAndReturnArgs} args - Arguments to create many Rating_tokos.
     * @example
     * // Create many Rating_tokos
     * const rating_toko = await prisma.rating_toko.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rating_tokos and only return the `id`
     * const rating_tokoWithIdOnly = await prisma.rating_toko.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rating_tokoCreateManyAndReturnArgs>(args?: SelectSubset<T, rating_tokoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rating_tokoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating_toko.
     * @param {rating_tokoDeleteArgs} args - Arguments to delete one Rating_toko.
     * @example
     * // Delete one Rating_toko
     * const Rating_toko = await prisma.rating_toko.delete({
     *   where: {
     *     // ... filter to delete one Rating_toko
     *   }
     * })
     * 
     */
    delete<T extends rating_tokoDeleteArgs>(args: SelectSubset<T, rating_tokoDeleteArgs<ExtArgs>>): Prisma__rating_tokoClient<$Result.GetResult<Prisma.$rating_tokoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating_toko.
     * @param {rating_tokoUpdateArgs} args - Arguments to update one Rating_toko.
     * @example
     * // Update one Rating_toko
     * const rating_toko = await prisma.rating_toko.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rating_tokoUpdateArgs>(args: SelectSubset<T, rating_tokoUpdateArgs<ExtArgs>>): Prisma__rating_tokoClient<$Result.GetResult<Prisma.$rating_tokoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rating_tokos.
     * @param {rating_tokoDeleteManyArgs} args - Arguments to filter Rating_tokos to delete.
     * @example
     * // Delete a few Rating_tokos
     * const { count } = await prisma.rating_toko.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rating_tokoDeleteManyArgs>(args?: SelectSubset<T, rating_tokoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rating_tokos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_tokoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rating_tokos
     * const rating_toko = await prisma.rating_toko.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rating_tokoUpdateManyArgs>(args: SelectSubset<T, rating_tokoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rating_tokos and returns the data updated in the database.
     * @param {rating_tokoUpdateManyAndReturnArgs} args - Arguments to update many Rating_tokos.
     * @example
     * // Update many Rating_tokos
     * const rating_toko = await prisma.rating_toko.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rating_tokos and only return the `id`
     * const rating_tokoWithIdOnly = await prisma.rating_toko.updateManyAndReturn({
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
    updateManyAndReturn<T extends rating_tokoUpdateManyAndReturnArgs>(args: SelectSubset<T, rating_tokoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rating_tokoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating_toko.
     * @param {rating_tokoUpsertArgs} args - Arguments to update or create a Rating_toko.
     * @example
     * // Update or create a Rating_toko
     * const rating_toko = await prisma.rating_toko.upsert({
     *   create: {
     *     // ... data to create a Rating_toko
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating_toko we want to update
     *   }
     * })
     */
    upsert<T extends rating_tokoUpsertArgs>(args: SelectSubset<T, rating_tokoUpsertArgs<ExtArgs>>): Prisma__rating_tokoClient<$Result.GetResult<Prisma.$rating_tokoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rating_tokos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_tokoCountArgs} args - Arguments to filter Rating_tokos to count.
     * @example
     * // Count the number of Rating_tokos
     * const count = await prisma.rating_toko.count({
     *   where: {
     *     // ... the filter for the Rating_tokos we want to count
     *   }
     * })
    **/
    count<T extends rating_tokoCountArgs>(
      args?: Subset<T, rating_tokoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rating_tokoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating_toko.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rating_tokoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rating_tokoAggregateArgs>(args: Subset<T, Rating_tokoAggregateArgs>): Prisma.PrismaPromise<GetRating_tokoAggregateType<T>>

    /**
     * Group by Rating_toko.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rating_tokoGroupByArgs} args - Group by arguments.
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
      T extends rating_tokoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rating_tokoGroupByArgs['orderBy'] }
        : { orderBy?: rating_tokoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rating_tokoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRating_tokoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rating_toko model
   */
  readonly fields: rating_tokoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rating_toko.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rating_tokoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the rating_toko model
   */
  interface rating_tokoFieldRefs {
    readonly id: FieldRef<"rating_toko", 'String'>
    readonly nilai: FieldRef<"rating_toko", 'Float'>
    readonly bulan: FieldRef<"rating_toko", 'String'>
    readonly created_at: FieldRef<"rating_toko", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * rating_toko findUnique
   */
  export type rating_tokoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_toko
     */
    select?: rating_tokoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating_toko
     */
    omit?: rating_tokoOmit<ExtArgs> | null
    /**
     * Filter, which rating_toko to fetch.
     */
    where: rating_tokoWhereUniqueInput
  }

  /**
   * rating_toko findUniqueOrThrow
   */
  export type rating_tokoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_toko
     */
    select?: rating_tokoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating_toko
     */
    omit?: rating_tokoOmit<ExtArgs> | null
    /**
     * Filter, which rating_toko to fetch.
     */
    where: rating_tokoWhereUniqueInput
  }

  /**
   * rating_toko findFirst
   */
  export type rating_tokoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_toko
     */
    select?: rating_tokoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating_toko
     */
    omit?: rating_tokoOmit<ExtArgs> | null
    /**
     * Filter, which rating_toko to fetch.
     */
    where?: rating_tokoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rating_tokos to fetch.
     */
    orderBy?: rating_tokoOrderByWithRelationInput | rating_tokoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rating_tokos.
     */
    cursor?: rating_tokoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rating_tokos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rating_tokos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rating_tokos.
     */
    distinct?: Rating_tokoScalarFieldEnum | Rating_tokoScalarFieldEnum[]
  }

  /**
   * rating_toko findFirstOrThrow
   */
  export type rating_tokoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_toko
     */
    select?: rating_tokoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating_toko
     */
    omit?: rating_tokoOmit<ExtArgs> | null
    /**
     * Filter, which rating_toko to fetch.
     */
    where?: rating_tokoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rating_tokos to fetch.
     */
    orderBy?: rating_tokoOrderByWithRelationInput | rating_tokoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rating_tokos.
     */
    cursor?: rating_tokoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rating_tokos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rating_tokos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rating_tokos.
     */
    distinct?: Rating_tokoScalarFieldEnum | Rating_tokoScalarFieldEnum[]
  }

  /**
   * rating_toko findMany
   */
  export type rating_tokoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_toko
     */
    select?: rating_tokoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating_toko
     */
    omit?: rating_tokoOmit<ExtArgs> | null
    /**
     * Filter, which rating_tokos to fetch.
     */
    where?: rating_tokoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rating_tokos to fetch.
     */
    orderBy?: rating_tokoOrderByWithRelationInput | rating_tokoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rating_tokos.
     */
    cursor?: rating_tokoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rating_tokos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rating_tokos.
     */
    skip?: number
    distinct?: Rating_tokoScalarFieldEnum | Rating_tokoScalarFieldEnum[]
  }

  /**
   * rating_toko create
   */
  export type rating_tokoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_toko
     */
    select?: rating_tokoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating_toko
     */
    omit?: rating_tokoOmit<ExtArgs> | null
    /**
     * The data needed to create a rating_toko.
     */
    data: XOR<rating_tokoCreateInput, rating_tokoUncheckedCreateInput>
  }

  /**
   * rating_toko createMany
   */
  export type rating_tokoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rating_tokos.
     */
    data: rating_tokoCreateManyInput | rating_tokoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rating_toko createManyAndReturn
   */
  export type rating_tokoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_toko
     */
    select?: rating_tokoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rating_toko
     */
    omit?: rating_tokoOmit<ExtArgs> | null
    /**
     * The data used to create many rating_tokos.
     */
    data: rating_tokoCreateManyInput | rating_tokoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rating_toko update
   */
  export type rating_tokoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_toko
     */
    select?: rating_tokoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating_toko
     */
    omit?: rating_tokoOmit<ExtArgs> | null
    /**
     * The data needed to update a rating_toko.
     */
    data: XOR<rating_tokoUpdateInput, rating_tokoUncheckedUpdateInput>
    /**
     * Choose, which rating_toko to update.
     */
    where: rating_tokoWhereUniqueInput
  }

  /**
   * rating_toko updateMany
   */
  export type rating_tokoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rating_tokos.
     */
    data: XOR<rating_tokoUpdateManyMutationInput, rating_tokoUncheckedUpdateManyInput>
    /**
     * Filter which rating_tokos to update
     */
    where?: rating_tokoWhereInput
    /**
     * Limit how many rating_tokos to update.
     */
    limit?: number
  }

  /**
   * rating_toko updateManyAndReturn
   */
  export type rating_tokoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_toko
     */
    select?: rating_tokoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rating_toko
     */
    omit?: rating_tokoOmit<ExtArgs> | null
    /**
     * The data used to update rating_tokos.
     */
    data: XOR<rating_tokoUpdateManyMutationInput, rating_tokoUncheckedUpdateManyInput>
    /**
     * Filter which rating_tokos to update
     */
    where?: rating_tokoWhereInput
    /**
     * Limit how many rating_tokos to update.
     */
    limit?: number
  }

  /**
   * rating_toko upsert
   */
  export type rating_tokoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_toko
     */
    select?: rating_tokoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating_toko
     */
    omit?: rating_tokoOmit<ExtArgs> | null
    /**
     * The filter to search for the rating_toko to update in case it exists.
     */
    where: rating_tokoWhereUniqueInput
    /**
     * In case the rating_toko found by the `where` argument doesn't exist, create a new rating_toko with this data.
     */
    create: XOR<rating_tokoCreateInput, rating_tokoUncheckedCreateInput>
    /**
     * In case the rating_toko was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rating_tokoUpdateInput, rating_tokoUncheckedUpdateInput>
  }

  /**
   * rating_toko delete
   */
  export type rating_tokoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_toko
     */
    select?: rating_tokoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating_toko
     */
    omit?: rating_tokoOmit<ExtArgs> | null
    /**
     * Filter which rating_toko to delete.
     */
    where: rating_tokoWhereUniqueInput
  }

  /**
   * rating_toko deleteMany
   */
  export type rating_tokoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rating_tokos to delete
     */
    where?: rating_tokoWhereInput
    /**
     * Limit how many rating_tokos to delete.
     */
    limit?: number
  }

  /**
   * rating_toko without action
   */
  export type rating_tokoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating_toko
     */
    select?: rating_tokoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating_toko
     */
    omit?: rating_tokoOmit<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nama: string
    email: string
    password: string
    role: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "password" | "role", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      email: string
      password: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly nama: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Model pesanan
   */

  export type AggregatePesanan = {
    _count: PesananCountAggregateOutputType | null
    _avg: PesananAvgAggregateOutputType | null
    _sum: PesananSumAggregateOutputType | null
    _min: PesananMinAggregateOutputType | null
    _max: PesananMaxAggregateOutputType | null
  }

  export type PesananAvgAggregateOutputType = {
    total: number | null
  }

  export type PesananSumAggregateOutputType = {
    total: number | null
  }

  export type PesananMinAggregateOutputType = {
    id: string | null
    nama: string | null
    produk_id: string | null
    total: number | null
    tanggal: Date | null
    status: string | null
  }

  export type PesananMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    produk_id: string | null
    total: number | null
    tanggal: Date | null
    status: string | null
  }

  export type PesananCountAggregateOutputType = {
    id: number
    nama: number
    produk_id: number
    total: number
    tanggal: number
    status: number
    _all: number
  }


  export type PesananAvgAggregateInputType = {
    total?: true
  }

  export type PesananSumAggregateInputType = {
    total?: true
  }

  export type PesananMinAggregateInputType = {
    id?: true
    nama?: true
    produk_id?: true
    total?: true
    tanggal?: true
    status?: true
  }

  export type PesananMaxAggregateInputType = {
    id?: true
    nama?: true
    produk_id?: true
    total?: true
    tanggal?: true
    status?: true
  }

  export type PesananCountAggregateInputType = {
    id?: true
    nama?: true
    produk_id?: true
    total?: true
    tanggal?: true
    status?: true
    _all?: true
  }

  export type PesananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pesanan to aggregate.
     */
    where?: pesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesanans to fetch.
     */
    orderBy?: pesananOrderByWithRelationInput | pesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pesanans
    **/
    _count?: true | PesananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PesananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PesananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PesananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PesananMaxAggregateInputType
  }

  export type GetPesananAggregateType<T extends PesananAggregateArgs> = {
        [P in keyof T & keyof AggregatePesanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePesanan[P]>
      : GetScalarType<T[P], AggregatePesanan[P]>
  }




  export type pesananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pesananWhereInput
    orderBy?: pesananOrderByWithAggregationInput | pesananOrderByWithAggregationInput[]
    by: PesananScalarFieldEnum[] | PesananScalarFieldEnum
    having?: pesananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PesananCountAggregateInputType | true
    _avg?: PesananAvgAggregateInputType
    _sum?: PesananSumAggregateInputType
    _min?: PesananMinAggregateInputType
    _max?: PesananMaxAggregateInputType
  }

  export type PesananGroupByOutputType = {
    id: string
    nama: string
    produk_id: string
    total: number
    tanggal: Date
    status: string
    _count: PesananCountAggregateOutputType | null
    _avg: PesananAvgAggregateOutputType | null
    _sum: PesananSumAggregateOutputType | null
    _min: PesananMinAggregateOutputType | null
    _max: PesananMaxAggregateOutputType | null
  }

  type GetPesananGroupByPayload<T extends pesananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PesananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PesananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PesananGroupByOutputType[P]>
            : GetScalarType<T[P], PesananGroupByOutputType[P]>
        }
      >
    >


  export type pesananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    produk_id?: boolean
    total?: boolean
    tanggal?: boolean
    status?: boolean
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesanan"]>

  export type pesananSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    produk_id?: boolean
    total?: boolean
    tanggal?: boolean
    status?: boolean
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesanan"]>

  export type pesananSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    produk_id?: boolean
    total?: boolean
    tanggal?: boolean
    status?: boolean
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesanan"]>

  export type pesananSelectScalar = {
    id?: boolean
    nama?: boolean
    produk_id?: boolean
    total?: boolean
    tanggal?: boolean
    status?: boolean
  }

  export type pesananOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "produk_id" | "total" | "tanggal" | "status", ExtArgs["result"]["pesanan"]>
  export type pesananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }
  export type pesananIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }
  export type pesananIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }

  export type $pesananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pesanan"
    objects: {
      produk: Prisma.$produkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      produk_id: string
      total: number
      tanggal: Date
      status: string
    }, ExtArgs["result"]["pesanan"]>
    composites: {}
  }

  type pesananGetPayload<S extends boolean | null | undefined | pesananDefaultArgs> = $Result.GetResult<Prisma.$pesananPayload, S>

  type pesananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pesananFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PesananCountAggregateInputType | true
    }

  export interface pesananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pesanan'], meta: { name: 'pesanan' } }
    /**
     * Find zero or one Pesanan that matches the filter.
     * @param {pesananFindUniqueArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pesananFindUniqueArgs>(args: SelectSubset<T, pesananFindUniqueArgs<ExtArgs>>): Prisma__pesananClient<$Result.GetResult<Prisma.$pesananPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pesanan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pesananFindUniqueOrThrowArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pesananFindUniqueOrThrowArgs>(args: SelectSubset<T, pesananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pesananClient<$Result.GetResult<Prisma.$pesananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pesanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesananFindFirstArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pesananFindFirstArgs>(args?: SelectSubset<T, pesananFindFirstArgs<ExtArgs>>): Prisma__pesananClient<$Result.GetResult<Prisma.$pesananPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pesanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesananFindFirstOrThrowArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pesananFindFirstOrThrowArgs>(args?: SelectSubset<T, pesananFindFirstOrThrowArgs<ExtArgs>>): Prisma__pesananClient<$Result.GetResult<Prisma.$pesananPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pesanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pesanans
     * const pesanans = await prisma.pesanan.findMany()
     * 
     * // Get first 10 Pesanans
     * const pesanans = await prisma.pesanan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pesananWithIdOnly = await prisma.pesanan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pesananFindManyArgs>(args?: SelectSubset<T, pesananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pesanan.
     * @param {pesananCreateArgs} args - Arguments to create a Pesanan.
     * @example
     * // Create one Pesanan
     * const Pesanan = await prisma.pesanan.create({
     *   data: {
     *     // ... data to create a Pesanan
     *   }
     * })
     * 
     */
    create<T extends pesananCreateArgs>(args: SelectSubset<T, pesananCreateArgs<ExtArgs>>): Prisma__pesananClient<$Result.GetResult<Prisma.$pesananPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pesanans.
     * @param {pesananCreateManyArgs} args - Arguments to create many Pesanans.
     * @example
     * // Create many Pesanans
     * const pesanan = await prisma.pesanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pesananCreateManyArgs>(args?: SelectSubset<T, pesananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pesanans and returns the data saved in the database.
     * @param {pesananCreateManyAndReturnArgs} args - Arguments to create many Pesanans.
     * @example
     * // Create many Pesanans
     * const pesanan = await prisma.pesanan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pesanans and only return the `id`
     * const pesananWithIdOnly = await prisma.pesanan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pesananCreateManyAndReturnArgs>(args?: SelectSubset<T, pesananCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pesananPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pesanan.
     * @param {pesananDeleteArgs} args - Arguments to delete one Pesanan.
     * @example
     * // Delete one Pesanan
     * const Pesanan = await prisma.pesanan.delete({
     *   where: {
     *     // ... filter to delete one Pesanan
     *   }
     * })
     * 
     */
    delete<T extends pesananDeleteArgs>(args: SelectSubset<T, pesananDeleteArgs<ExtArgs>>): Prisma__pesananClient<$Result.GetResult<Prisma.$pesananPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pesanan.
     * @param {pesananUpdateArgs} args - Arguments to update one Pesanan.
     * @example
     * // Update one Pesanan
     * const pesanan = await prisma.pesanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pesananUpdateArgs>(args: SelectSubset<T, pesananUpdateArgs<ExtArgs>>): Prisma__pesananClient<$Result.GetResult<Prisma.$pesananPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pesanans.
     * @param {pesananDeleteManyArgs} args - Arguments to filter Pesanans to delete.
     * @example
     * // Delete a few Pesanans
     * const { count } = await prisma.pesanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pesananDeleteManyArgs>(args?: SelectSubset<T, pesananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pesanans
     * const pesanan = await prisma.pesanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pesananUpdateManyArgs>(args: SelectSubset<T, pesananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesanans and returns the data updated in the database.
     * @param {pesananUpdateManyAndReturnArgs} args - Arguments to update many Pesanans.
     * @example
     * // Update many Pesanans
     * const pesanan = await prisma.pesanan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pesanans and only return the `id`
     * const pesananWithIdOnly = await prisma.pesanan.updateManyAndReturn({
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
    updateManyAndReturn<T extends pesananUpdateManyAndReturnArgs>(args: SelectSubset<T, pesananUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pesananPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pesanan.
     * @param {pesananUpsertArgs} args - Arguments to update or create a Pesanan.
     * @example
     * // Update or create a Pesanan
     * const pesanan = await prisma.pesanan.upsert({
     *   create: {
     *     // ... data to create a Pesanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pesanan we want to update
     *   }
     * })
     */
    upsert<T extends pesananUpsertArgs>(args: SelectSubset<T, pesananUpsertArgs<ExtArgs>>): Prisma__pesananClient<$Result.GetResult<Prisma.$pesananPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesananCountArgs} args - Arguments to filter Pesanans to count.
     * @example
     * // Count the number of Pesanans
     * const count = await prisma.pesanan.count({
     *   where: {
     *     // ... the filter for the Pesanans we want to count
     *   }
     * })
    **/
    count<T extends pesananCountArgs>(
      args?: Subset<T, pesananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PesananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PesananAggregateArgs>(args: Subset<T, PesananAggregateArgs>): Prisma.PrismaPromise<GetPesananAggregateType<T>>

    /**
     * Group by Pesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesananGroupByArgs} args - Group by arguments.
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
      T extends pesananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pesananGroupByArgs['orderBy'] }
        : { orderBy?: pesananGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pesananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pesanan model
   */
  readonly fields: pesananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pesanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pesananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends produkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produkDefaultArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pesanan model
   */
  interface pesananFieldRefs {
    readonly id: FieldRef<"pesanan", 'String'>
    readonly nama: FieldRef<"pesanan", 'String'>
    readonly produk_id: FieldRef<"pesanan", 'String'>
    readonly total: FieldRef<"pesanan", 'Int'>
    readonly tanggal: FieldRef<"pesanan", 'DateTime'>
    readonly status: FieldRef<"pesanan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pesanan findUnique
   */
  export type pesananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesanan
     */
    select?: pesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesanan
     */
    omit?: pesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesananInclude<ExtArgs> | null
    /**
     * Filter, which pesanan to fetch.
     */
    where: pesananWhereUniqueInput
  }

  /**
   * pesanan findUniqueOrThrow
   */
  export type pesananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesanan
     */
    select?: pesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesanan
     */
    omit?: pesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesananInclude<ExtArgs> | null
    /**
     * Filter, which pesanan to fetch.
     */
    where: pesananWhereUniqueInput
  }

  /**
   * pesanan findFirst
   */
  export type pesananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesanan
     */
    select?: pesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesanan
     */
    omit?: pesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesananInclude<ExtArgs> | null
    /**
     * Filter, which pesanan to fetch.
     */
    where?: pesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesanans to fetch.
     */
    orderBy?: pesananOrderByWithRelationInput | pesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pesanans.
     */
    cursor?: pesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pesanans.
     */
    distinct?: PesananScalarFieldEnum | PesananScalarFieldEnum[]
  }

  /**
   * pesanan findFirstOrThrow
   */
  export type pesananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesanan
     */
    select?: pesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesanan
     */
    omit?: pesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesananInclude<ExtArgs> | null
    /**
     * Filter, which pesanan to fetch.
     */
    where?: pesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesanans to fetch.
     */
    orderBy?: pesananOrderByWithRelationInput | pesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pesanans.
     */
    cursor?: pesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pesanans.
     */
    distinct?: PesananScalarFieldEnum | PesananScalarFieldEnum[]
  }

  /**
   * pesanan findMany
   */
  export type pesananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesanan
     */
    select?: pesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesanan
     */
    omit?: pesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesananInclude<ExtArgs> | null
    /**
     * Filter, which pesanans to fetch.
     */
    where?: pesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesanans to fetch.
     */
    orderBy?: pesananOrderByWithRelationInput | pesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pesanans.
     */
    cursor?: pesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesanans.
     */
    skip?: number
    distinct?: PesananScalarFieldEnum | PesananScalarFieldEnum[]
  }

  /**
   * pesanan create
   */
  export type pesananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesanan
     */
    select?: pesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesanan
     */
    omit?: pesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesananInclude<ExtArgs> | null
    /**
     * The data needed to create a pesanan.
     */
    data: XOR<pesananCreateInput, pesananUncheckedCreateInput>
  }

  /**
   * pesanan createMany
   */
  export type pesananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pesanans.
     */
    data: pesananCreateManyInput | pesananCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pesanan createManyAndReturn
   */
  export type pesananCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesanan
     */
    select?: pesananSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pesanan
     */
    omit?: pesananOmit<ExtArgs> | null
    /**
     * The data used to create many pesanans.
     */
    data: pesananCreateManyInput | pesananCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesananIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pesanan update
   */
  export type pesananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesanan
     */
    select?: pesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesanan
     */
    omit?: pesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesananInclude<ExtArgs> | null
    /**
     * The data needed to update a pesanan.
     */
    data: XOR<pesananUpdateInput, pesananUncheckedUpdateInput>
    /**
     * Choose, which pesanan to update.
     */
    where: pesananWhereUniqueInput
  }

  /**
   * pesanan updateMany
   */
  export type pesananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pesanans.
     */
    data: XOR<pesananUpdateManyMutationInput, pesananUncheckedUpdateManyInput>
    /**
     * Filter which pesanans to update
     */
    where?: pesananWhereInput
    /**
     * Limit how many pesanans to update.
     */
    limit?: number
  }

  /**
   * pesanan updateManyAndReturn
   */
  export type pesananUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesanan
     */
    select?: pesananSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pesanan
     */
    omit?: pesananOmit<ExtArgs> | null
    /**
     * The data used to update pesanans.
     */
    data: XOR<pesananUpdateManyMutationInput, pesananUncheckedUpdateManyInput>
    /**
     * Filter which pesanans to update
     */
    where?: pesananWhereInput
    /**
     * Limit how many pesanans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesananIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pesanan upsert
   */
  export type pesananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesanan
     */
    select?: pesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesanan
     */
    omit?: pesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesananInclude<ExtArgs> | null
    /**
     * The filter to search for the pesanan to update in case it exists.
     */
    where: pesananWhereUniqueInput
    /**
     * In case the pesanan found by the `where` argument doesn't exist, create a new pesanan with this data.
     */
    create: XOR<pesananCreateInput, pesananUncheckedCreateInput>
    /**
     * In case the pesanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pesananUpdateInput, pesananUncheckedUpdateInput>
  }

  /**
   * pesanan delete
   */
  export type pesananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesanan
     */
    select?: pesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesanan
     */
    omit?: pesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesananInclude<ExtArgs> | null
    /**
     * Filter which pesanan to delete.
     */
    where: pesananWhereUniqueInput
  }

  /**
   * pesanan deleteMany
   */
  export type pesananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pesanans to delete
     */
    where?: pesananWhereInput
    /**
     * Limit how many pesanans to delete.
     */
    limit?: number
  }

  /**
   * pesanan without action
   */
  export type pesananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pesanan
     */
    select?: pesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pesanan
     */
    omit?: pesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesananInclude<ExtArgs> | null
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


  export const ProdukScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    harga: 'harga',
    deskripsi: 'deskripsi',
    gambar_url: 'gambar_url',
    kategori: 'kategori',
    stok: 'stok',
    terjual: 'terjual'
  };

  export type ProdukScalarFieldEnum = (typeof ProdukScalarFieldEnum)[keyof typeof ProdukScalarFieldEnum]


  export const PelangganScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    alamat: 'alamat',
    telepon: 'telepon'
  };

  export type PelangganScalarFieldEnum = (typeof PelangganScalarFieldEnum)[keyof typeof PelangganScalarFieldEnum]


  export const PenjualanScalarFieldEnum: {
    id: 'id',
    pelanggan_id: 'pelanggan_id',
    produk_id: 'produk_id',
    jumlah: 'jumlah',
    total: 'total',
    status: 'status',
    tanggal: 'tanggal'
  };

  export type PenjualanScalarFieldEnum = (typeof PenjualanScalarFieldEnum)[keyof typeof PenjualanScalarFieldEnum]


  export const PendapatanScalarFieldEnum: {
    bulan: 'bulan',
    pendapatan: 'pendapatan'
  };

  export type PendapatanScalarFieldEnum = (typeof PendapatanScalarFieldEnum)[keyof typeof PendapatanScalarFieldEnum]


  export const Rating_tokoScalarFieldEnum: {
    id: 'id',
    nilai: 'nilai',
    bulan: 'bulan',
    created_at: 'created_at'
  };

  export type Rating_tokoScalarFieldEnum = (typeof Rating_tokoScalarFieldEnum)[keyof typeof Rating_tokoScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PesananScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    produk_id: 'produk_id',
    total: 'total',
    tanggal: 'tanggal',
    status: 'status'
  };

  export type PesananScalarFieldEnum = (typeof PesananScalarFieldEnum)[keyof typeof PesananScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type produkWhereInput = {
    AND?: produkWhereInput | produkWhereInput[]
    OR?: produkWhereInput[]
    NOT?: produkWhereInput | produkWhereInput[]
    id?: UuidFilter<"produk"> | string
    nama?: StringFilter<"produk"> | string
    harga?: IntFilter<"produk"> | number
    deskripsi?: StringFilter<"produk"> | string
    gambar_url?: StringFilter<"produk"> | string
    kategori?: StringFilter<"produk"> | string
    stok?: IntFilter<"produk"> | number
    terjual?: IntFilter<"produk"> | number
    penjualan?: PenjualanListRelationFilter
    pesanan?: PesananListRelationFilter
  }

  export type produkOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrder
    gambar_url?: SortOrder
    kategori?: SortOrder
    stok?: SortOrder
    terjual?: SortOrder
    penjualan?: penjualanOrderByRelationAggregateInput
    pesanan?: pesananOrderByRelationAggregateInput
  }

  export type produkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: produkWhereInput | produkWhereInput[]
    OR?: produkWhereInput[]
    NOT?: produkWhereInput | produkWhereInput[]
    nama?: StringFilter<"produk"> | string
    harga?: IntFilter<"produk"> | number
    deskripsi?: StringFilter<"produk"> | string
    gambar_url?: StringFilter<"produk"> | string
    kategori?: StringFilter<"produk"> | string
    stok?: IntFilter<"produk"> | number
    terjual?: IntFilter<"produk"> | number
    penjualan?: PenjualanListRelationFilter
    pesanan?: PesananListRelationFilter
  }, "id">

  export type produkOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrder
    gambar_url?: SortOrder
    kategori?: SortOrder
    stok?: SortOrder
    terjual?: SortOrder
    _count?: produkCountOrderByAggregateInput
    _avg?: produkAvgOrderByAggregateInput
    _max?: produkMaxOrderByAggregateInput
    _min?: produkMinOrderByAggregateInput
    _sum?: produkSumOrderByAggregateInput
  }

  export type produkScalarWhereWithAggregatesInput = {
    AND?: produkScalarWhereWithAggregatesInput | produkScalarWhereWithAggregatesInput[]
    OR?: produkScalarWhereWithAggregatesInput[]
    NOT?: produkScalarWhereWithAggregatesInput | produkScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"produk"> | string
    nama?: StringWithAggregatesFilter<"produk"> | string
    harga?: IntWithAggregatesFilter<"produk"> | number
    deskripsi?: StringWithAggregatesFilter<"produk"> | string
    gambar_url?: StringWithAggregatesFilter<"produk"> | string
    kategori?: StringWithAggregatesFilter<"produk"> | string
    stok?: IntWithAggregatesFilter<"produk"> | number
    terjual?: IntWithAggregatesFilter<"produk"> | number
  }

  export type pelangganWhereInput = {
    AND?: pelangganWhereInput | pelangganWhereInput[]
    OR?: pelangganWhereInput[]
    NOT?: pelangganWhereInput | pelangganWhereInput[]
    id?: UuidFilter<"pelanggan"> | string
    nama?: StringFilter<"pelanggan"> | string
    email?: StringFilter<"pelanggan"> | string
    alamat?: StringFilter<"pelanggan"> | string
    telepon?: StringFilter<"pelanggan"> | string
    penjualan?: PenjualanListRelationFilter
  }

  export type pelangganOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    penjualan?: penjualanOrderByRelationAggregateInput
  }

  export type pelangganWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: pelangganWhereInput | pelangganWhereInput[]
    OR?: pelangganWhereInput[]
    NOT?: pelangganWhereInput | pelangganWhereInput[]
    nama?: StringFilter<"pelanggan"> | string
    alamat?: StringFilter<"pelanggan"> | string
    telepon?: StringFilter<"pelanggan"> | string
    penjualan?: PenjualanListRelationFilter
  }, "id" | "email">

  export type pelangganOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    _count?: pelangganCountOrderByAggregateInput
    _max?: pelangganMaxOrderByAggregateInput
    _min?: pelangganMinOrderByAggregateInput
  }

  export type pelangganScalarWhereWithAggregatesInput = {
    AND?: pelangganScalarWhereWithAggregatesInput | pelangganScalarWhereWithAggregatesInput[]
    OR?: pelangganScalarWhereWithAggregatesInput[]
    NOT?: pelangganScalarWhereWithAggregatesInput | pelangganScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"pelanggan"> | string
    nama?: StringWithAggregatesFilter<"pelanggan"> | string
    email?: StringWithAggregatesFilter<"pelanggan"> | string
    alamat?: StringWithAggregatesFilter<"pelanggan"> | string
    telepon?: StringWithAggregatesFilter<"pelanggan"> | string
  }

  export type penjualanWhereInput = {
    AND?: penjualanWhereInput | penjualanWhereInput[]
    OR?: penjualanWhereInput[]
    NOT?: penjualanWhereInput | penjualanWhereInput[]
    id?: UuidFilter<"penjualan"> | string
    pelanggan_id?: UuidFilter<"penjualan"> | string
    produk_id?: UuidFilter<"penjualan"> | string
    jumlah?: IntFilter<"penjualan"> | number
    total?: IntFilter<"penjualan"> | number
    status?: StringFilter<"penjualan"> | string
    tanggal?: DateTimeFilter<"penjualan"> | Date | string
    pelanggan?: XOR<PelangganScalarRelationFilter, pelangganWhereInput>
    produk?: XOR<ProdukScalarRelationFilter, produkWhereInput>
  }

  export type penjualanOrderByWithRelationInput = {
    id?: SortOrder
    pelanggan_id?: SortOrder
    produk_id?: SortOrder
    jumlah?: SortOrder
    total?: SortOrder
    status?: SortOrder
    tanggal?: SortOrder
    pelanggan?: pelangganOrderByWithRelationInput
    produk?: produkOrderByWithRelationInput
  }

  export type penjualanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: penjualanWhereInput | penjualanWhereInput[]
    OR?: penjualanWhereInput[]
    NOT?: penjualanWhereInput | penjualanWhereInput[]
    pelanggan_id?: UuidFilter<"penjualan"> | string
    produk_id?: UuidFilter<"penjualan"> | string
    jumlah?: IntFilter<"penjualan"> | number
    total?: IntFilter<"penjualan"> | number
    status?: StringFilter<"penjualan"> | string
    tanggal?: DateTimeFilter<"penjualan"> | Date | string
    pelanggan?: XOR<PelangganScalarRelationFilter, pelangganWhereInput>
    produk?: XOR<ProdukScalarRelationFilter, produkWhereInput>
  }, "id">

  export type penjualanOrderByWithAggregationInput = {
    id?: SortOrder
    pelanggan_id?: SortOrder
    produk_id?: SortOrder
    jumlah?: SortOrder
    total?: SortOrder
    status?: SortOrder
    tanggal?: SortOrder
    _count?: penjualanCountOrderByAggregateInput
    _avg?: penjualanAvgOrderByAggregateInput
    _max?: penjualanMaxOrderByAggregateInput
    _min?: penjualanMinOrderByAggregateInput
    _sum?: penjualanSumOrderByAggregateInput
  }

  export type penjualanScalarWhereWithAggregatesInput = {
    AND?: penjualanScalarWhereWithAggregatesInput | penjualanScalarWhereWithAggregatesInput[]
    OR?: penjualanScalarWhereWithAggregatesInput[]
    NOT?: penjualanScalarWhereWithAggregatesInput | penjualanScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"penjualan"> | string
    pelanggan_id?: UuidWithAggregatesFilter<"penjualan"> | string
    produk_id?: UuidWithAggregatesFilter<"penjualan"> | string
    jumlah?: IntWithAggregatesFilter<"penjualan"> | number
    total?: IntWithAggregatesFilter<"penjualan"> | number
    status?: StringWithAggregatesFilter<"penjualan"> | string
    tanggal?: DateTimeWithAggregatesFilter<"penjualan"> | Date | string
  }

  export type pendapatanWhereInput = {
    AND?: pendapatanWhereInput | pendapatanWhereInput[]
    OR?: pendapatanWhereInput[]
    NOT?: pendapatanWhereInput | pendapatanWhereInput[]
    bulan?: StringFilter<"pendapatan"> | string
    pendapatan?: IntFilter<"pendapatan"> | number
  }

  export type pendapatanOrderByWithRelationInput = {
    bulan?: SortOrder
    pendapatan?: SortOrder
  }

  export type pendapatanWhereUniqueInput = Prisma.AtLeast<{
    bulan?: string
    AND?: pendapatanWhereInput | pendapatanWhereInput[]
    OR?: pendapatanWhereInput[]
    NOT?: pendapatanWhereInput | pendapatanWhereInput[]
    pendapatan?: IntFilter<"pendapatan"> | number
  }, "bulan">

  export type pendapatanOrderByWithAggregationInput = {
    bulan?: SortOrder
    pendapatan?: SortOrder
    _count?: pendapatanCountOrderByAggregateInput
    _avg?: pendapatanAvgOrderByAggregateInput
    _max?: pendapatanMaxOrderByAggregateInput
    _min?: pendapatanMinOrderByAggregateInput
    _sum?: pendapatanSumOrderByAggregateInput
  }

  export type pendapatanScalarWhereWithAggregatesInput = {
    AND?: pendapatanScalarWhereWithAggregatesInput | pendapatanScalarWhereWithAggregatesInput[]
    OR?: pendapatanScalarWhereWithAggregatesInput[]
    NOT?: pendapatanScalarWhereWithAggregatesInput | pendapatanScalarWhereWithAggregatesInput[]
    bulan?: StringWithAggregatesFilter<"pendapatan"> | string
    pendapatan?: IntWithAggregatesFilter<"pendapatan"> | number
  }

  export type rating_tokoWhereInput = {
    AND?: rating_tokoWhereInput | rating_tokoWhereInput[]
    OR?: rating_tokoWhereInput[]
    NOT?: rating_tokoWhereInput | rating_tokoWhereInput[]
    id?: UuidFilter<"rating_toko"> | string
    nilai?: FloatFilter<"rating_toko"> | number
    bulan?: StringFilter<"rating_toko"> | string
    created_at?: DateTimeFilter<"rating_toko"> | Date | string
  }

  export type rating_tokoOrderByWithRelationInput = {
    id?: SortOrder
    nilai?: SortOrder
    bulan?: SortOrder
    created_at?: SortOrder
  }

  export type rating_tokoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: rating_tokoWhereInput | rating_tokoWhereInput[]
    OR?: rating_tokoWhereInput[]
    NOT?: rating_tokoWhereInput | rating_tokoWhereInput[]
    nilai?: FloatFilter<"rating_toko"> | number
    bulan?: StringFilter<"rating_toko"> | string
    created_at?: DateTimeFilter<"rating_toko"> | Date | string
  }, "id">

  export type rating_tokoOrderByWithAggregationInput = {
    id?: SortOrder
    nilai?: SortOrder
    bulan?: SortOrder
    created_at?: SortOrder
    _count?: rating_tokoCountOrderByAggregateInput
    _avg?: rating_tokoAvgOrderByAggregateInput
    _max?: rating_tokoMaxOrderByAggregateInput
    _min?: rating_tokoMinOrderByAggregateInput
    _sum?: rating_tokoSumOrderByAggregateInput
  }

  export type rating_tokoScalarWhereWithAggregatesInput = {
    AND?: rating_tokoScalarWhereWithAggregatesInput | rating_tokoScalarWhereWithAggregatesInput[]
    OR?: rating_tokoScalarWhereWithAggregatesInput[]
    NOT?: rating_tokoScalarWhereWithAggregatesInput | rating_tokoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"rating_toko"> | string
    nilai?: FloatWithAggregatesFilter<"rating_toko"> | number
    bulan?: StringWithAggregatesFilter<"rating_toko"> | string
    created_at?: DateTimeWithAggregatesFilter<"rating_toko"> | Date | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: UuidFilter<"user"> | string
    nama?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    nama?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user"> | string
    nama?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: StringWithAggregatesFilter<"user"> | string
  }

  export type pesananWhereInput = {
    AND?: pesananWhereInput | pesananWhereInput[]
    OR?: pesananWhereInput[]
    NOT?: pesananWhereInput | pesananWhereInput[]
    id?: UuidFilter<"pesanan"> | string
    nama?: StringFilter<"pesanan"> | string
    produk_id?: UuidFilter<"pesanan"> | string
    total?: IntFilter<"pesanan"> | number
    tanggal?: DateTimeFilter<"pesanan"> | Date | string
    status?: StringFilter<"pesanan"> | string
    produk?: XOR<ProdukScalarRelationFilter, produkWhereInput>
  }

  export type pesananOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    produk_id?: SortOrder
    total?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    produk?: produkOrderByWithRelationInput
  }

  export type pesananWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: pesananWhereInput | pesananWhereInput[]
    OR?: pesananWhereInput[]
    NOT?: pesananWhereInput | pesananWhereInput[]
    nama?: StringFilter<"pesanan"> | string
    produk_id?: UuidFilter<"pesanan"> | string
    total?: IntFilter<"pesanan"> | number
    tanggal?: DateTimeFilter<"pesanan"> | Date | string
    status?: StringFilter<"pesanan"> | string
    produk?: XOR<ProdukScalarRelationFilter, produkWhereInput>
  }, "id">

  export type pesananOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    produk_id?: SortOrder
    total?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    _count?: pesananCountOrderByAggregateInput
    _avg?: pesananAvgOrderByAggregateInput
    _max?: pesananMaxOrderByAggregateInput
    _min?: pesananMinOrderByAggregateInput
    _sum?: pesananSumOrderByAggregateInput
  }

  export type pesananScalarWhereWithAggregatesInput = {
    AND?: pesananScalarWhereWithAggregatesInput | pesananScalarWhereWithAggregatesInput[]
    OR?: pesananScalarWhereWithAggregatesInput[]
    NOT?: pesananScalarWhereWithAggregatesInput | pesananScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"pesanan"> | string
    nama?: StringWithAggregatesFilter<"pesanan"> | string
    produk_id?: UuidWithAggregatesFilter<"pesanan"> | string
    total?: IntWithAggregatesFilter<"pesanan"> | number
    tanggal?: DateTimeWithAggregatesFilter<"pesanan"> | Date | string
    status?: StringWithAggregatesFilter<"pesanan"> | string
  }

  export type produkCreateInput = {
    id?: string
    nama: string
    harga: number
    deskripsi: string
    gambar_url: string
    kategori: string
    stok?: number
    terjual?: number
    penjualan?: penjualanCreateNestedManyWithoutProdukInput
    pesanan?: pesananCreateNestedManyWithoutProdukInput
  }

  export type produkUncheckedCreateInput = {
    id?: string
    nama: string
    harga: number
    deskripsi: string
    gambar_url: string
    kategori: string
    stok?: number
    terjual?: number
    penjualan?: penjualanUncheckedCreateNestedManyWithoutProdukInput
    pesanan?: pesananUncheckedCreateNestedManyWithoutProdukInput
  }

  export type produkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar_url?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    terjual?: IntFieldUpdateOperationsInput | number
    penjualan?: penjualanUpdateManyWithoutProdukNestedInput
    pesanan?: pesananUpdateManyWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar_url?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    terjual?: IntFieldUpdateOperationsInput | number
    penjualan?: penjualanUncheckedUpdateManyWithoutProdukNestedInput
    pesanan?: pesananUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type produkCreateManyInput = {
    id?: string
    nama: string
    harga: number
    deskripsi: string
    gambar_url: string
    kategori: string
    stok?: number
    terjual?: number
  }

  export type produkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar_url?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    terjual?: IntFieldUpdateOperationsInput | number
  }

  export type produkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar_url?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    terjual?: IntFieldUpdateOperationsInput | number
  }

  export type pelangganCreateInput = {
    id?: string
    nama: string
    email: string
    alamat: string
    telepon: string
    penjualan?: penjualanCreateNestedManyWithoutPelangganInput
  }

  export type pelangganUncheckedCreateInput = {
    id?: string
    nama: string
    email: string
    alamat: string
    telepon: string
    penjualan?: penjualanUncheckedCreateNestedManyWithoutPelangganInput
  }

  export type pelangganUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    penjualan?: penjualanUpdateManyWithoutPelangganNestedInput
  }

  export type pelangganUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    penjualan?: penjualanUncheckedUpdateManyWithoutPelangganNestedInput
  }

  export type pelangganCreateManyInput = {
    id?: string
    nama: string
    email: string
    alamat: string
    telepon: string
  }

  export type pelangganUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
  }

  export type pelangganUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
  }

  export type penjualanCreateInput = {
    id?: string
    jumlah: number
    total: number
    status: string
    tanggal?: Date | string
    pelanggan: pelangganCreateNestedOneWithoutPenjualanInput
    produk: produkCreateNestedOneWithoutPenjualanInput
  }

  export type penjualanUncheckedCreateInput = {
    id?: string
    pelanggan_id: string
    produk_id: string
    jumlah: number
    total: number
    status: string
    tanggal?: Date | string
  }

  export type penjualanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    pelanggan?: pelangganUpdateOneRequiredWithoutPenjualanNestedInput
    produk?: produkUpdateOneRequiredWithoutPenjualanNestedInput
  }

  export type penjualanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pelanggan_id?: StringFieldUpdateOperationsInput | string
    produk_id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penjualanCreateManyInput = {
    id?: string
    pelanggan_id: string
    produk_id: string
    jumlah: number
    total: number
    status: string
    tanggal?: Date | string
  }

  export type penjualanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penjualanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pelanggan_id?: StringFieldUpdateOperationsInput | string
    produk_id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pendapatanCreateInput = {
    bulan: string
    pendapatan: number
  }

  export type pendapatanUncheckedCreateInput = {
    bulan: string
    pendapatan: number
  }

  export type pendapatanUpdateInput = {
    bulan?: StringFieldUpdateOperationsInput | string
    pendapatan?: IntFieldUpdateOperationsInput | number
  }

  export type pendapatanUncheckedUpdateInput = {
    bulan?: StringFieldUpdateOperationsInput | string
    pendapatan?: IntFieldUpdateOperationsInput | number
  }

  export type pendapatanCreateManyInput = {
    bulan: string
    pendapatan: number
  }

  export type pendapatanUpdateManyMutationInput = {
    bulan?: StringFieldUpdateOperationsInput | string
    pendapatan?: IntFieldUpdateOperationsInput | number
  }

  export type pendapatanUncheckedUpdateManyInput = {
    bulan?: StringFieldUpdateOperationsInput | string
    pendapatan?: IntFieldUpdateOperationsInput | number
  }

  export type rating_tokoCreateInput = {
    id?: string
    nilai: number
    bulan: string
    created_at?: Date | string
  }

  export type rating_tokoUncheckedCreateInput = {
    id?: string
    nilai: number
    bulan: string
    created_at?: Date | string
  }

  export type rating_tokoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
    bulan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rating_tokoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
    bulan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rating_tokoCreateManyInput = {
    id?: string
    nilai: number
    bulan: string
    created_at?: Date | string
  }

  export type rating_tokoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
    bulan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rating_tokoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
    bulan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    id?: string
    nama: string
    email: string
    password: string
    role?: string
  }

  export type userUncheckedCreateInput = {
    id?: string
    nama: string
    email: string
    password: string
    role?: string
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateManyInput = {
    id?: string
    nama: string
    email: string
    password: string
    role?: string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type pesananCreateInput = {
    id?: string
    nama: string
    total: number
    tanggal?: Date | string
    status: string
    produk: produkCreateNestedOneWithoutPesananInput
  }

  export type pesananUncheckedCreateInput = {
    id?: string
    nama: string
    produk_id: string
    total: number
    tanggal?: Date | string
    status: string
  }

  export type pesananUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    produk?: produkUpdateOneRequiredWithoutPesananNestedInput
  }

  export type pesananUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    produk_id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type pesananCreateManyInput = {
    id?: string
    nama: string
    produk_id: string
    total: number
    tanggal?: Date | string
    status: string
  }

  export type pesananUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type pesananUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    produk_id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type PenjualanListRelationFilter = {
    every?: penjualanWhereInput
    some?: penjualanWhereInput
    none?: penjualanWhereInput
  }

  export type PesananListRelationFilter = {
    every?: pesananWhereInput
    some?: pesananWhereInput
    none?: pesananWhereInput
  }

  export type penjualanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pesananOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type produkCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrder
    gambar_url?: SortOrder
    kategori?: SortOrder
    stok?: SortOrder
    terjual?: SortOrder
  }

  export type produkAvgOrderByAggregateInput = {
    harga?: SortOrder
    stok?: SortOrder
    terjual?: SortOrder
  }

  export type produkMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrder
    gambar_url?: SortOrder
    kategori?: SortOrder
    stok?: SortOrder
    terjual?: SortOrder
  }

  export type produkMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrder
    gambar_url?: SortOrder
    kategori?: SortOrder
    stok?: SortOrder
    terjual?: SortOrder
  }

  export type produkSumOrderByAggregateInput = {
    harga?: SortOrder
    stok?: SortOrder
    terjual?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type pelangganCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
  }

  export type pelangganMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
  }

  export type pelangganMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
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

  export type PelangganScalarRelationFilter = {
    is?: pelangganWhereInput
    isNot?: pelangganWhereInput
  }

  export type ProdukScalarRelationFilter = {
    is?: produkWhereInput
    isNot?: produkWhereInput
  }

  export type penjualanCountOrderByAggregateInput = {
    id?: SortOrder
    pelanggan_id?: SortOrder
    produk_id?: SortOrder
    jumlah?: SortOrder
    total?: SortOrder
    status?: SortOrder
    tanggal?: SortOrder
  }

  export type penjualanAvgOrderByAggregateInput = {
    jumlah?: SortOrder
    total?: SortOrder
  }

  export type penjualanMaxOrderByAggregateInput = {
    id?: SortOrder
    pelanggan_id?: SortOrder
    produk_id?: SortOrder
    jumlah?: SortOrder
    total?: SortOrder
    status?: SortOrder
    tanggal?: SortOrder
  }

  export type penjualanMinOrderByAggregateInput = {
    id?: SortOrder
    pelanggan_id?: SortOrder
    produk_id?: SortOrder
    jumlah?: SortOrder
    total?: SortOrder
    status?: SortOrder
    tanggal?: SortOrder
  }

  export type penjualanSumOrderByAggregateInput = {
    jumlah?: SortOrder
    total?: SortOrder
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

  export type pendapatanCountOrderByAggregateInput = {
    bulan?: SortOrder
    pendapatan?: SortOrder
  }

  export type pendapatanAvgOrderByAggregateInput = {
    pendapatan?: SortOrder
  }

  export type pendapatanMaxOrderByAggregateInput = {
    bulan?: SortOrder
    pendapatan?: SortOrder
  }

  export type pendapatanMinOrderByAggregateInput = {
    bulan?: SortOrder
    pendapatan?: SortOrder
  }

  export type pendapatanSumOrderByAggregateInput = {
    pendapatan?: SortOrder
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

  export type rating_tokoCountOrderByAggregateInput = {
    id?: SortOrder
    nilai?: SortOrder
    bulan?: SortOrder
    created_at?: SortOrder
  }

  export type rating_tokoAvgOrderByAggregateInput = {
    nilai?: SortOrder
  }

  export type rating_tokoMaxOrderByAggregateInput = {
    id?: SortOrder
    nilai?: SortOrder
    bulan?: SortOrder
    created_at?: SortOrder
  }

  export type rating_tokoMinOrderByAggregateInput = {
    id?: SortOrder
    nilai?: SortOrder
    bulan?: SortOrder
    created_at?: SortOrder
  }

  export type rating_tokoSumOrderByAggregateInput = {
    nilai?: SortOrder
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

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type pesananCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    produk_id?: SortOrder
    total?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
  }

  export type pesananAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type pesananMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    produk_id?: SortOrder
    total?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
  }

  export type pesananMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    produk_id?: SortOrder
    total?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
  }

  export type pesananSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type penjualanCreateNestedManyWithoutProdukInput = {
    create?: XOR<penjualanCreateWithoutProdukInput, penjualanUncheckedCreateWithoutProdukInput> | penjualanCreateWithoutProdukInput[] | penjualanUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutProdukInput | penjualanCreateOrConnectWithoutProdukInput[]
    createMany?: penjualanCreateManyProdukInputEnvelope
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
  }

  export type pesananCreateNestedManyWithoutProdukInput = {
    create?: XOR<pesananCreateWithoutProdukInput, pesananUncheckedCreateWithoutProdukInput> | pesananCreateWithoutProdukInput[] | pesananUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: pesananCreateOrConnectWithoutProdukInput | pesananCreateOrConnectWithoutProdukInput[]
    createMany?: pesananCreateManyProdukInputEnvelope
    connect?: pesananWhereUniqueInput | pesananWhereUniqueInput[]
  }

  export type penjualanUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<penjualanCreateWithoutProdukInput, penjualanUncheckedCreateWithoutProdukInput> | penjualanCreateWithoutProdukInput[] | penjualanUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutProdukInput | penjualanCreateOrConnectWithoutProdukInput[]
    createMany?: penjualanCreateManyProdukInputEnvelope
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
  }

  export type pesananUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<pesananCreateWithoutProdukInput, pesananUncheckedCreateWithoutProdukInput> | pesananCreateWithoutProdukInput[] | pesananUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: pesananCreateOrConnectWithoutProdukInput | pesananCreateOrConnectWithoutProdukInput[]
    createMany?: pesananCreateManyProdukInputEnvelope
    connect?: pesananWhereUniqueInput | pesananWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type penjualanUpdateManyWithoutProdukNestedInput = {
    create?: XOR<penjualanCreateWithoutProdukInput, penjualanUncheckedCreateWithoutProdukInput> | penjualanCreateWithoutProdukInput[] | penjualanUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutProdukInput | penjualanCreateOrConnectWithoutProdukInput[]
    upsert?: penjualanUpsertWithWhereUniqueWithoutProdukInput | penjualanUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: penjualanCreateManyProdukInputEnvelope
    set?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    disconnect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    delete?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    update?: penjualanUpdateWithWhereUniqueWithoutProdukInput | penjualanUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: penjualanUpdateManyWithWhereWithoutProdukInput | penjualanUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: penjualanScalarWhereInput | penjualanScalarWhereInput[]
  }

  export type pesananUpdateManyWithoutProdukNestedInput = {
    create?: XOR<pesananCreateWithoutProdukInput, pesananUncheckedCreateWithoutProdukInput> | pesananCreateWithoutProdukInput[] | pesananUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: pesananCreateOrConnectWithoutProdukInput | pesananCreateOrConnectWithoutProdukInput[]
    upsert?: pesananUpsertWithWhereUniqueWithoutProdukInput | pesananUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: pesananCreateManyProdukInputEnvelope
    set?: pesananWhereUniqueInput | pesananWhereUniqueInput[]
    disconnect?: pesananWhereUniqueInput | pesananWhereUniqueInput[]
    delete?: pesananWhereUniqueInput | pesananWhereUniqueInput[]
    connect?: pesananWhereUniqueInput | pesananWhereUniqueInput[]
    update?: pesananUpdateWithWhereUniqueWithoutProdukInput | pesananUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: pesananUpdateManyWithWhereWithoutProdukInput | pesananUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: pesananScalarWhereInput | pesananScalarWhereInput[]
  }

  export type penjualanUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<penjualanCreateWithoutProdukInput, penjualanUncheckedCreateWithoutProdukInput> | penjualanCreateWithoutProdukInput[] | penjualanUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutProdukInput | penjualanCreateOrConnectWithoutProdukInput[]
    upsert?: penjualanUpsertWithWhereUniqueWithoutProdukInput | penjualanUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: penjualanCreateManyProdukInputEnvelope
    set?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    disconnect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    delete?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    update?: penjualanUpdateWithWhereUniqueWithoutProdukInput | penjualanUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: penjualanUpdateManyWithWhereWithoutProdukInput | penjualanUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: penjualanScalarWhereInput | penjualanScalarWhereInput[]
  }

  export type pesananUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<pesananCreateWithoutProdukInput, pesananUncheckedCreateWithoutProdukInput> | pesananCreateWithoutProdukInput[] | pesananUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: pesananCreateOrConnectWithoutProdukInput | pesananCreateOrConnectWithoutProdukInput[]
    upsert?: pesananUpsertWithWhereUniqueWithoutProdukInput | pesananUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: pesananCreateManyProdukInputEnvelope
    set?: pesananWhereUniqueInput | pesananWhereUniqueInput[]
    disconnect?: pesananWhereUniqueInput | pesananWhereUniqueInput[]
    delete?: pesananWhereUniqueInput | pesananWhereUniqueInput[]
    connect?: pesananWhereUniqueInput | pesananWhereUniqueInput[]
    update?: pesananUpdateWithWhereUniqueWithoutProdukInput | pesananUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: pesananUpdateManyWithWhereWithoutProdukInput | pesananUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: pesananScalarWhereInput | pesananScalarWhereInput[]
  }

  export type penjualanCreateNestedManyWithoutPelangganInput = {
    create?: XOR<penjualanCreateWithoutPelangganInput, penjualanUncheckedCreateWithoutPelangganInput> | penjualanCreateWithoutPelangganInput[] | penjualanUncheckedCreateWithoutPelangganInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutPelangganInput | penjualanCreateOrConnectWithoutPelangganInput[]
    createMany?: penjualanCreateManyPelangganInputEnvelope
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
  }

  export type penjualanUncheckedCreateNestedManyWithoutPelangganInput = {
    create?: XOR<penjualanCreateWithoutPelangganInput, penjualanUncheckedCreateWithoutPelangganInput> | penjualanCreateWithoutPelangganInput[] | penjualanUncheckedCreateWithoutPelangganInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutPelangganInput | penjualanCreateOrConnectWithoutPelangganInput[]
    createMany?: penjualanCreateManyPelangganInputEnvelope
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
  }

  export type penjualanUpdateManyWithoutPelangganNestedInput = {
    create?: XOR<penjualanCreateWithoutPelangganInput, penjualanUncheckedCreateWithoutPelangganInput> | penjualanCreateWithoutPelangganInput[] | penjualanUncheckedCreateWithoutPelangganInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutPelangganInput | penjualanCreateOrConnectWithoutPelangganInput[]
    upsert?: penjualanUpsertWithWhereUniqueWithoutPelangganInput | penjualanUpsertWithWhereUniqueWithoutPelangganInput[]
    createMany?: penjualanCreateManyPelangganInputEnvelope
    set?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    disconnect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    delete?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    update?: penjualanUpdateWithWhereUniqueWithoutPelangganInput | penjualanUpdateWithWhereUniqueWithoutPelangganInput[]
    updateMany?: penjualanUpdateManyWithWhereWithoutPelangganInput | penjualanUpdateManyWithWhereWithoutPelangganInput[]
    deleteMany?: penjualanScalarWhereInput | penjualanScalarWhereInput[]
  }

  export type penjualanUncheckedUpdateManyWithoutPelangganNestedInput = {
    create?: XOR<penjualanCreateWithoutPelangganInput, penjualanUncheckedCreateWithoutPelangganInput> | penjualanCreateWithoutPelangganInput[] | penjualanUncheckedCreateWithoutPelangganInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutPelangganInput | penjualanCreateOrConnectWithoutPelangganInput[]
    upsert?: penjualanUpsertWithWhereUniqueWithoutPelangganInput | penjualanUpsertWithWhereUniqueWithoutPelangganInput[]
    createMany?: penjualanCreateManyPelangganInputEnvelope
    set?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    disconnect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    delete?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    update?: penjualanUpdateWithWhereUniqueWithoutPelangganInput | penjualanUpdateWithWhereUniqueWithoutPelangganInput[]
    updateMany?: penjualanUpdateManyWithWhereWithoutPelangganInput | penjualanUpdateManyWithWhereWithoutPelangganInput[]
    deleteMany?: penjualanScalarWhereInput | penjualanScalarWhereInput[]
  }

  export type pelangganCreateNestedOneWithoutPenjualanInput = {
    create?: XOR<pelangganCreateWithoutPenjualanInput, pelangganUncheckedCreateWithoutPenjualanInput>
    connectOrCreate?: pelangganCreateOrConnectWithoutPenjualanInput
    connect?: pelangganWhereUniqueInput
  }

  export type produkCreateNestedOneWithoutPenjualanInput = {
    create?: XOR<produkCreateWithoutPenjualanInput, produkUncheckedCreateWithoutPenjualanInput>
    connectOrCreate?: produkCreateOrConnectWithoutPenjualanInput
    connect?: produkWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type pelangganUpdateOneRequiredWithoutPenjualanNestedInput = {
    create?: XOR<pelangganCreateWithoutPenjualanInput, pelangganUncheckedCreateWithoutPenjualanInput>
    connectOrCreate?: pelangganCreateOrConnectWithoutPenjualanInput
    upsert?: pelangganUpsertWithoutPenjualanInput
    connect?: pelangganWhereUniqueInput
    update?: XOR<XOR<pelangganUpdateToOneWithWhereWithoutPenjualanInput, pelangganUpdateWithoutPenjualanInput>, pelangganUncheckedUpdateWithoutPenjualanInput>
  }

  export type produkUpdateOneRequiredWithoutPenjualanNestedInput = {
    create?: XOR<produkCreateWithoutPenjualanInput, produkUncheckedCreateWithoutPenjualanInput>
    connectOrCreate?: produkCreateOrConnectWithoutPenjualanInput
    upsert?: produkUpsertWithoutPenjualanInput
    connect?: produkWhereUniqueInput
    update?: XOR<XOR<produkUpdateToOneWithWhereWithoutPenjualanInput, produkUpdateWithoutPenjualanInput>, produkUncheckedUpdateWithoutPenjualanInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type produkCreateNestedOneWithoutPesananInput = {
    create?: XOR<produkCreateWithoutPesananInput, produkUncheckedCreateWithoutPesananInput>
    connectOrCreate?: produkCreateOrConnectWithoutPesananInput
    connect?: produkWhereUniqueInput
  }

  export type produkUpdateOneRequiredWithoutPesananNestedInput = {
    create?: XOR<produkCreateWithoutPesananInput, produkUncheckedCreateWithoutPesananInput>
    connectOrCreate?: produkCreateOrConnectWithoutPesananInput
    upsert?: produkUpsertWithoutPesananInput
    connect?: produkWhereUniqueInput
    update?: XOR<XOR<produkUpdateToOneWithWhereWithoutPesananInput, produkUpdateWithoutPesananInput>, produkUncheckedUpdateWithoutPesananInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type penjualanCreateWithoutProdukInput = {
    id?: string
    jumlah: number
    total: number
    status: string
    tanggal?: Date | string
    pelanggan: pelangganCreateNestedOneWithoutPenjualanInput
  }

  export type penjualanUncheckedCreateWithoutProdukInput = {
    id?: string
    pelanggan_id: string
    jumlah: number
    total: number
    status: string
    tanggal?: Date | string
  }

  export type penjualanCreateOrConnectWithoutProdukInput = {
    where: penjualanWhereUniqueInput
    create: XOR<penjualanCreateWithoutProdukInput, penjualanUncheckedCreateWithoutProdukInput>
  }

  export type penjualanCreateManyProdukInputEnvelope = {
    data: penjualanCreateManyProdukInput | penjualanCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type pesananCreateWithoutProdukInput = {
    id?: string
    nama: string
    total: number
    tanggal?: Date | string
    status: string
  }

  export type pesananUncheckedCreateWithoutProdukInput = {
    id?: string
    nama: string
    total: number
    tanggal?: Date | string
    status: string
  }

  export type pesananCreateOrConnectWithoutProdukInput = {
    where: pesananWhereUniqueInput
    create: XOR<pesananCreateWithoutProdukInput, pesananUncheckedCreateWithoutProdukInput>
  }

  export type pesananCreateManyProdukInputEnvelope = {
    data: pesananCreateManyProdukInput | pesananCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type penjualanUpsertWithWhereUniqueWithoutProdukInput = {
    where: penjualanWhereUniqueInput
    update: XOR<penjualanUpdateWithoutProdukInput, penjualanUncheckedUpdateWithoutProdukInput>
    create: XOR<penjualanCreateWithoutProdukInput, penjualanUncheckedCreateWithoutProdukInput>
  }

  export type penjualanUpdateWithWhereUniqueWithoutProdukInput = {
    where: penjualanWhereUniqueInput
    data: XOR<penjualanUpdateWithoutProdukInput, penjualanUncheckedUpdateWithoutProdukInput>
  }

  export type penjualanUpdateManyWithWhereWithoutProdukInput = {
    where: penjualanScalarWhereInput
    data: XOR<penjualanUpdateManyMutationInput, penjualanUncheckedUpdateManyWithoutProdukInput>
  }

  export type penjualanScalarWhereInput = {
    AND?: penjualanScalarWhereInput | penjualanScalarWhereInput[]
    OR?: penjualanScalarWhereInput[]
    NOT?: penjualanScalarWhereInput | penjualanScalarWhereInput[]
    id?: UuidFilter<"penjualan"> | string
    pelanggan_id?: UuidFilter<"penjualan"> | string
    produk_id?: UuidFilter<"penjualan"> | string
    jumlah?: IntFilter<"penjualan"> | number
    total?: IntFilter<"penjualan"> | number
    status?: StringFilter<"penjualan"> | string
    tanggal?: DateTimeFilter<"penjualan"> | Date | string
  }

  export type pesananUpsertWithWhereUniqueWithoutProdukInput = {
    where: pesananWhereUniqueInput
    update: XOR<pesananUpdateWithoutProdukInput, pesananUncheckedUpdateWithoutProdukInput>
    create: XOR<pesananCreateWithoutProdukInput, pesananUncheckedCreateWithoutProdukInput>
  }

  export type pesananUpdateWithWhereUniqueWithoutProdukInput = {
    where: pesananWhereUniqueInput
    data: XOR<pesananUpdateWithoutProdukInput, pesananUncheckedUpdateWithoutProdukInput>
  }

  export type pesananUpdateManyWithWhereWithoutProdukInput = {
    where: pesananScalarWhereInput
    data: XOR<pesananUpdateManyMutationInput, pesananUncheckedUpdateManyWithoutProdukInput>
  }

  export type pesananScalarWhereInput = {
    AND?: pesananScalarWhereInput | pesananScalarWhereInput[]
    OR?: pesananScalarWhereInput[]
    NOT?: pesananScalarWhereInput | pesananScalarWhereInput[]
    id?: UuidFilter<"pesanan"> | string
    nama?: StringFilter<"pesanan"> | string
    produk_id?: UuidFilter<"pesanan"> | string
    total?: IntFilter<"pesanan"> | number
    tanggal?: DateTimeFilter<"pesanan"> | Date | string
    status?: StringFilter<"pesanan"> | string
  }

  export type penjualanCreateWithoutPelangganInput = {
    id?: string
    jumlah: number
    total: number
    status: string
    tanggal?: Date | string
    produk: produkCreateNestedOneWithoutPenjualanInput
  }

  export type penjualanUncheckedCreateWithoutPelangganInput = {
    id?: string
    produk_id: string
    jumlah: number
    total: number
    status: string
    tanggal?: Date | string
  }

  export type penjualanCreateOrConnectWithoutPelangganInput = {
    where: penjualanWhereUniqueInput
    create: XOR<penjualanCreateWithoutPelangganInput, penjualanUncheckedCreateWithoutPelangganInput>
  }

  export type penjualanCreateManyPelangganInputEnvelope = {
    data: penjualanCreateManyPelangganInput | penjualanCreateManyPelangganInput[]
    skipDuplicates?: boolean
  }

  export type penjualanUpsertWithWhereUniqueWithoutPelangganInput = {
    where: penjualanWhereUniqueInput
    update: XOR<penjualanUpdateWithoutPelangganInput, penjualanUncheckedUpdateWithoutPelangganInput>
    create: XOR<penjualanCreateWithoutPelangganInput, penjualanUncheckedCreateWithoutPelangganInput>
  }

  export type penjualanUpdateWithWhereUniqueWithoutPelangganInput = {
    where: penjualanWhereUniqueInput
    data: XOR<penjualanUpdateWithoutPelangganInput, penjualanUncheckedUpdateWithoutPelangganInput>
  }

  export type penjualanUpdateManyWithWhereWithoutPelangganInput = {
    where: penjualanScalarWhereInput
    data: XOR<penjualanUpdateManyMutationInput, penjualanUncheckedUpdateManyWithoutPelangganInput>
  }

  export type pelangganCreateWithoutPenjualanInput = {
    id?: string
    nama: string
    email: string
    alamat: string
    telepon: string
  }

  export type pelangganUncheckedCreateWithoutPenjualanInput = {
    id?: string
    nama: string
    email: string
    alamat: string
    telepon: string
  }

  export type pelangganCreateOrConnectWithoutPenjualanInput = {
    where: pelangganWhereUniqueInput
    create: XOR<pelangganCreateWithoutPenjualanInput, pelangganUncheckedCreateWithoutPenjualanInput>
  }

  export type produkCreateWithoutPenjualanInput = {
    id?: string
    nama: string
    harga: number
    deskripsi: string
    gambar_url: string
    kategori: string
    stok?: number
    terjual?: number
    pesanan?: pesananCreateNestedManyWithoutProdukInput
  }

  export type produkUncheckedCreateWithoutPenjualanInput = {
    id?: string
    nama: string
    harga: number
    deskripsi: string
    gambar_url: string
    kategori: string
    stok?: number
    terjual?: number
    pesanan?: pesananUncheckedCreateNestedManyWithoutProdukInput
  }

  export type produkCreateOrConnectWithoutPenjualanInput = {
    where: produkWhereUniqueInput
    create: XOR<produkCreateWithoutPenjualanInput, produkUncheckedCreateWithoutPenjualanInput>
  }

  export type pelangganUpsertWithoutPenjualanInput = {
    update: XOR<pelangganUpdateWithoutPenjualanInput, pelangganUncheckedUpdateWithoutPenjualanInput>
    create: XOR<pelangganCreateWithoutPenjualanInput, pelangganUncheckedCreateWithoutPenjualanInput>
    where?: pelangganWhereInput
  }

  export type pelangganUpdateToOneWithWhereWithoutPenjualanInput = {
    where?: pelangganWhereInput
    data: XOR<pelangganUpdateWithoutPenjualanInput, pelangganUncheckedUpdateWithoutPenjualanInput>
  }

  export type pelangganUpdateWithoutPenjualanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
  }

  export type pelangganUncheckedUpdateWithoutPenjualanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
  }

  export type produkUpsertWithoutPenjualanInput = {
    update: XOR<produkUpdateWithoutPenjualanInput, produkUncheckedUpdateWithoutPenjualanInput>
    create: XOR<produkCreateWithoutPenjualanInput, produkUncheckedCreateWithoutPenjualanInput>
    where?: produkWhereInput
  }

  export type produkUpdateToOneWithWhereWithoutPenjualanInput = {
    where?: produkWhereInput
    data: XOR<produkUpdateWithoutPenjualanInput, produkUncheckedUpdateWithoutPenjualanInput>
  }

  export type produkUpdateWithoutPenjualanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar_url?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    terjual?: IntFieldUpdateOperationsInput | number
    pesanan?: pesananUpdateManyWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateWithoutPenjualanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar_url?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    terjual?: IntFieldUpdateOperationsInput | number
    pesanan?: pesananUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type produkCreateWithoutPesananInput = {
    id?: string
    nama: string
    harga: number
    deskripsi: string
    gambar_url: string
    kategori: string
    stok?: number
    terjual?: number
    penjualan?: penjualanCreateNestedManyWithoutProdukInput
  }

  export type produkUncheckedCreateWithoutPesananInput = {
    id?: string
    nama: string
    harga: number
    deskripsi: string
    gambar_url: string
    kategori: string
    stok?: number
    terjual?: number
    penjualan?: penjualanUncheckedCreateNestedManyWithoutProdukInput
  }

  export type produkCreateOrConnectWithoutPesananInput = {
    where: produkWhereUniqueInput
    create: XOR<produkCreateWithoutPesananInput, produkUncheckedCreateWithoutPesananInput>
  }

  export type produkUpsertWithoutPesananInput = {
    update: XOR<produkUpdateWithoutPesananInput, produkUncheckedUpdateWithoutPesananInput>
    create: XOR<produkCreateWithoutPesananInput, produkUncheckedCreateWithoutPesananInput>
    where?: produkWhereInput
  }

  export type produkUpdateToOneWithWhereWithoutPesananInput = {
    where?: produkWhereInput
    data: XOR<produkUpdateWithoutPesananInput, produkUncheckedUpdateWithoutPesananInput>
  }

  export type produkUpdateWithoutPesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar_url?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    terjual?: IntFieldUpdateOperationsInput | number
    penjualan?: penjualanUpdateManyWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateWithoutPesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar_url?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    terjual?: IntFieldUpdateOperationsInput | number
    penjualan?: penjualanUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type penjualanCreateManyProdukInput = {
    id?: string
    pelanggan_id: string
    jumlah: number
    total: number
    status: string
    tanggal?: Date | string
  }

  export type pesananCreateManyProdukInput = {
    id?: string
    nama: string
    total: number
    tanggal?: Date | string
    status: string
  }

  export type penjualanUpdateWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    pelanggan?: pelangganUpdateOneRequiredWithoutPenjualanNestedInput
  }

  export type penjualanUncheckedUpdateWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    pelanggan_id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penjualanUncheckedUpdateManyWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    pelanggan_id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pesananUpdateWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type pesananUncheckedUpdateWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type pesananUncheckedUpdateManyWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type penjualanCreateManyPelangganInput = {
    id?: string
    produk_id: string
    jumlah: number
    total: number
    status: string
    tanggal?: Date | string
  }

  export type penjualanUpdateWithoutPelangganInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    produk?: produkUpdateOneRequiredWithoutPenjualanNestedInput
  }

  export type penjualanUncheckedUpdateWithoutPelangganInput = {
    id?: StringFieldUpdateOperationsInput | string
    produk_id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penjualanUncheckedUpdateManyWithoutPelangganInput = {
    id?: StringFieldUpdateOperationsInput | string
    produk_id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
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