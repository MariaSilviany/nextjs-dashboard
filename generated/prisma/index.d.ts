
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
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model invoices_items
 * 
 */
export type invoices_items = $Result.DefaultSelection<Prisma.$invoices_itemsPayload>
/**
 * Model store_metrics
 * 
 */
export type store_metrics = $Result.DefaultSelection<Prisma.$store_metricsPayload>
/**
 * Model invoices
 * 
 */
export type invoices = $Result.DefaultSelection<Prisma.$invoicesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.products.findMany()
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
   * // Fetch zero or more Products
   * const products = await prisma.products.findMany()
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
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoices_items`: Exposes CRUD operations for the **invoices_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices_items
    * const invoices_items = await prisma.invoices_items.findMany()
    * ```
    */
  get invoices_items(): Prisma.invoices_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store_metrics`: Exposes CRUD operations for the **store_metrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Store_metrics
    * const store_metrics = await prisma.store_metrics.findMany()
    * ```
    */
  get store_metrics(): Prisma.store_metricsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoices`: Exposes CRUD operations for the **invoices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoices.findMany()
    * ```
    */
  get invoices(): Prisma.invoicesDelegate<ExtArgs, ClientOptions>;
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
    products: 'products',
    invoices_items: 'invoices_items',
    store_metrics: 'store_metrics',
    invoices: 'invoices'
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
      modelProps: "products" | "invoices_items" | "store_metrics" | "invoices"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      invoices_items: {
        payload: Prisma.$invoices_itemsPayload<ExtArgs>
        fields: Prisma.invoices_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoices_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoices_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoices_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoices_itemsPayload>
          }
          findFirst: {
            args: Prisma.invoices_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoices_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoices_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoices_itemsPayload>
          }
          findMany: {
            args: Prisma.invoices_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoices_itemsPayload>[]
          }
          create: {
            args: Prisma.invoices_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoices_itemsPayload>
          }
          createMany: {
            args: Prisma.invoices_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoices_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoices_itemsPayload>[]
          }
          delete: {
            args: Prisma.invoices_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoices_itemsPayload>
          }
          update: {
            args: Prisma.invoices_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoices_itemsPayload>
          }
          deleteMany: {
            args: Prisma.invoices_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoices_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invoices_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoices_itemsPayload>[]
          }
          upsert: {
            args: Prisma.invoices_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoices_itemsPayload>
          }
          aggregate: {
            args: Prisma.Invoices_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoices_items>
          }
          groupBy: {
            args: Prisma.invoices_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Invoices_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoices_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Invoices_itemsCountAggregateOutputType> | number
          }
        }
      }
      store_metrics: {
        payload: Prisma.$store_metricsPayload<ExtArgs>
        fields: Prisma.store_metricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.store_metricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_metricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.store_metricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_metricsPayload>
          }
          findFirst: {
            args: Prisma.store_metricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_metricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.store_metricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_metricsPayload>
          }
          findMany: {
            args: Prisma.store_metricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_metricsPayload>[]
          }
          create: {
            args: Prisma.store_metricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_metricsPayload>
          }
          createMany: {
            args: Prisma.store_metricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.store_metricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_metricsPayload>[]
          }
          delete: {
            args: Prisma.store_metricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_metricsPayload>
          }
          update: {
            args: Prisma.store_metricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_metricsPayload>
          }
          deleteMany: {
            args: Prisma.store_metricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.store_metricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.store_metricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_metricsPayload>[]
          }
          upsert: {
            args: Prisma.store_metricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$store_metricsPayload>
          }
          aggregate: {
            args: Prisma.Store_metricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore_metrics>
          }
          groupBy: {
            args: Prisma.store_metricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Store_metricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.store_metricsCountArgs<ExtArgs>
            result: $Utils.Optional<Store_metricsCountAggregateOutputType> | number
          }
        }
      }
      invoices: {
        payload: Prisma.$invoicesPayload<ExtArgs>
        fields: Prisma.invoicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findFirst: {
            args: Prisma.invoicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findMany: {
            args: Prisma.invoicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          create: {
            args: Prisma.invoicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          createMany: {
            args: Prisma.invoicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          delete: {
            args: Prisma.invoicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          update: {
            args: Prisma.invoicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          deleteMany: {
            args: Prisma.invoicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invoicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          upsert: {
            args: Prisma.invoicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          aggregate: {
            args: Prisma.InvoicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoices>
          }
          groupBy: {
            args: Prisma.invoicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoicesCountArgs<ExtArgs>
            result: $Utils.Optional<InvoicesCountAggregateOutputType> | number
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
    products?: productsOmit
    invoices_items?: invoices_itemsOmit
    store_metrics?: store_metricsOmit
    invoices?: invoicesOmit
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
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    invoices: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | ProductsCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoices_itemsWhereInput
  }


  /**
   * Count Type InvoicesCountOutputType
   */

  export type InvoicesCountOutputType = {
    items: number
  }

  export type InvoicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InvoicesCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoicesCountOutputType
     */
    select?: InvoicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoices_itemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    price: number | null
    sold_count: number | null
  }

  export type ProductsSumAggregateOutputType = {
    price: number | null
    sold_count: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    image_url: string | null
    sold_count: number | null
    createdAt: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    image_url: string | null
    sold_count: number | null
    createdAt: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    price: number
    image_url: number
    sold_count: number
    createdAt: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    price?: true
    sold_count?: true
  }

  export type ProductsSumAggregateInputType = {
    price?: true
    sold_count?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image_url?: true
    sold_count?: true
    createdAt?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image_url?: true
    sold_count?: true
    createdAt?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image_url?: true
    sold_count?: true
    createdAt?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    name: string
    price: number
    image_url: string
    sold_count: number
    createdAt: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    image_url?: boolean
    sold_count?: boolean
    createdAt?: boolean
    invoices?: boolean | products$invoicesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    image_url?: boolean
    sold_count?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    image_url?: boolean
    sold_count?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    image_url?: boolean
    sold_count?: boolean
    createdAt?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "image_url" | "sold_count" | "createdAt", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | products$invoicesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      invoices: Prisma.$invoices_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      image_url: string
      sold_count: number
      createdAt: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
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
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends products$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, products$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoices_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'String'>
    readonly name: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Int'>
    readonly image_url: FieldRef<"products", 'String'>
    readonly sold_count: FieldRef<"products", 'Int'>
    readonly createdAt: FieldRef<"products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.invoices
   */
  export type products$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices_items
     */
    select?: invoices_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices_items
     */
    omit?: invoices_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoices_itemsInclude<ExtArgs> | null
    where?: invoices_itemsWhereInput
    orderBy?: invoices_itemsOrderByWithRelationInput | invoices_itemsOrderByWithRelationInput[]
    cursor?: invoices_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invoices_itemsScalarFieldEnum | Invoices_itemsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model invoices_items
   */

  export type AggregateInvoices_items = {
    _count: Invoices_itemsCountAggregateOutputType | null
    _avg: Invoices_itemsAvgAggregateOutputType | null
    _sum: Invoices_itemsSumAggregateOutputType | null
    _min: Invoices_itemsMinAggregateOutputType | null
    _max: Invoices_itemsMaxAggregateOutputType | null
  }

  export type Invoices_itemsAvgAggregateOutputType = {
    quantity: number | null
    total: number | null
  }

  export type Invoices_itemsSumAggregateOutputType = {
    quantity: number | null
    total: number | null
  }

  export type Invoices_itemsMinAggregateOutputType = {
    id: string | null
    invoice_id: string | null
    product_id: string | null
    quantity: number | null
    total: number | null
  }

  export type Invoices_itemsMaxAggregateOutputType = {
    id: string | null
    invoice_id: string | null
    product_id: string | null
    quantity: number | null
    total: number | null
  }

  export type Invoices_itemsCountAggregateOutputType = {
    id: number
    invoice_id: number
    product_id: number
    quantity: number
    total: number
    _all: number
  }


  export type Invoices_itemsAvgAggregateInputType = {
    quantity?: true
    total?: true
  }

  export type Invoices_itemsSumAggregateInputType = {
    quantity?: true
    total?: true
  }

  export type Invoices_itemsMinAggregateInputType = {
    id?: true
    invoice_id?: true
    product_id?: true
    quantity?: true
    total?: true
  }

  export type Invoices_itemsMaxAggregateInputType = {
    id?: true
    invoice_id?: true
    product_id?: true
    quantity?: true
    total?: true
  }

  export type Invoices_itemsCountAggregateInputType = {
    id?: true
    invoice_id?: true
    product_id?: true
    quantity?: true
    total?: true
    _all?: true
  }

  export type Invoices_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices_items to aggregate.
     */
    where?: invoices_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices_items to fetch.
     */
    orderBy?: invoices_itemsOrderByWithRelationInput | invoices_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoices_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoices_items
    **/
    _count?: true | Invoices_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Invoices_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Invoices_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Invoices_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Invoices_itemsMaxAggregateInputType
  }

  export type GetInvoices_itemsAggregateType<T extends Invoices_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoices_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoices_items[P]>
      : GetScalarType<T[P], AggregateInvoices_items[P]>
  }




  export type invoices_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoices_itemsWhereInput
    orderBy?: invoices_itemsOrderByWithAggregationInput | invoices_itemsOrderByWithAggregationInput[]
    by: Invoices_itemsScalarFieldEnum[] | Invoices_itemsScalarFieldEnum
    having?: invoices_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Invoices_itemsCountAggregateInputType | true
    _avg?: Invoices_itemsAvgAggregateInputType
    _sum?: Invoices_itemsSumAggregateInputType
    _min?: Invoices_itemsMinAggregateInputType
    _max?: Invoices_itemsMaxAggregateInputType
  }

  export type Invoices_itemsGroupByOutputType = {
    id: string
    invoice_id: string
    product_id: string
    quantity: number
    total: number
    _count: Invoices_itemsCountAggregateOutputType | null
    _avg: Invoices_itemsAvgAggregateOutputType | null
    _sum: Invoices_itemsSumAggregateOutputType | null
    _min: Invoices_itemsMinAggregateOutputType | null
    _max: Invoices_itemsMaxAggregateOutputType | null
  }

  type GetInvoices_itemsGroupByPayload<T extends invoices_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Invoices_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Invoices_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Invoices_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Invoices_itemsGroupByOutputType[P]>
        }
      >
    >


  export type invoices_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    quantity?: boolean
    total?: boolean
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices_items"]>

  export type invoices_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    quantity?: boolean
    total?: boolean
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices_items"]>

  export type invoices_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    quantity?: boolean
    total?: boolean
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices_items"]>

  export type invoices_itemsSelectScalar = {
    id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    quantity?: boolean
    total?: boolean
  }

  export type invoices_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoice_id" | "product_id" | "quantity" | "total", ExtArgs["result"]["invoices_items"]>
  export type invoices_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type invoices_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type invoices_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $invoices_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoices_items"
    objects: {
      invoice: Prisma.$invoicesPayload<ExtArgs>
      product: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoice_id: string
      product_id: string
      quantity: number
      total: number
    }, ExtArgs["result"]["invoices_items"]>
    composites: {}
  }

  type invoices_itemsGetPayload<S extends boolean | null | undefined | invoices_itemsDefaultArgs> = $Result.GetResult<Prisma.$invoices_itemsPayload, S>

  type invoices_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoices_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Invoices_itemsCountAggregateInputType | true
    }

  export interface invoices_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoices_items'], meta: { name: 'invoices_items' } }
    /**
     * Find zero or one Invoices_items that matches the filter.
     * @param {invoices_itemsFindUniqueArgs} args - Arguments to find a Invoices_items
     * @example
     * // Get one Invoices_items
     * const invoices_items = await prisma.invoices_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoices_itemsFindUniqueArgs>(args: SelectSubset<T, invoices_itemsFindUniqueArgs<ExtArgs>>): Prisma__invoices_itemsClient<$Result.GetResult<Prisma.$invoices_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoices_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoices_itemsFindUniqueOrThrowArgs} args - Arguments to find a Invoices_items
     * @example
     * // Get one Invoices_items
     * const invoices_items = await prisma.invoices_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoices_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, invoices_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoices_itemsClient<$Result.GetResult<Prisma.$invoices_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoices_itemsFindFirstArgs} args - Arguments to find a Invoices_items
     * @example
     * // Get one Invoices_items
     * const invoices_items = await prisma.invoices_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoices_itemsFindFirstArgs>(args?: SelectSubset<T, invoices_itemsFindFirstArgs<ExtArgs>>): Prisma__invoices_itemsClient<$Result.GetResult<Prisma.$invoices_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoices_itemsFindFirstOrThrowArgs} args - Arguments to find a Invoices_items
     * @example
     * // Get one Invoices_items
     * const invoices_items = await prisma.invoices_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoices_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, invoices_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoices_itemsClient<$Result.GetResult<Prisma.$invoices_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoices_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices_items
     * const invoices_items = await prisma.invoices_items.findMany()
     * 
     * // Get first 10 Invoices_items
     * const invoices_items = await prisma.invoices_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoices_itemsWithIdOnly = await prisma.invoices_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoices_itemsFindManyArgs>(args?: SelectSubset<T, invoices_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoices_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoices_items.
     * @param {invoices_itemsCreateArgs} args - Arguments to create a Invoices_items.
     * @example
     * // Create one Invoices_items
     * const Invoices_items = await prisma.invoices_items.create({
     *   data: {
     *     // ... data to create a Invoices_items
     *   }
     * })
     * 
     */
    create<T extends invoices_itemsCreateArgs>(args: SelectSubset<T, invoices_itemsCreateArgs<ExtArgs>>): Prisma__invoices_itemsClient<$Result.GetResult<Prisma.$invoices_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices_items.
     * @param {invoices_itemsCreateManyArgs} args - Arguments to create many Invoices_items.
     * @example
     * // Create many Invoices_items
     * const invoices_items = await prisma.invoices_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoices_itemsCreateManyArgs>(args?: SelectSubset<T, invoices_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices_items and returns the data saved in the database.
     * @param {invoices_itemsCreateManyAndReturnArgs} args - Arguments to create many Invoices_items.
     * @example
     * // Create many Invoices_items
     * const invoices_items = await prisma.invoices_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices_items and only return the `id`
     * const invoices_itemsWithIdOnly = await prisma.invoices_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoices_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, invoices_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoices_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoices_items.
     * @param {invoices_itemsDeleteArgs} args - Arguments to delete one Invoices_items.
     * @example
     * // Delete one Invoices_items
     * const Invoices_items = await prisma.invoices_items.delete({
     *   where: {
     *     // ... filter to delete one Invoices_items
     *   }
     * })
     * 
     */
    delete<T extends invoices_itemsDeleteArgs>(args: SelectSubset<T, invoices_itemsDeleteArgs<ExtArgs>>): Prisma__invoices_itemsClient<$Result.GetResult<Prisma.$invoices_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoices_items.
     * @param {invoices_itemsUpdateArgs} args - Arguments to update one Invoices_items.
     * @example
     * // Update one Invoices_items
     * const invoices_items = await prisma.invoices_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoices_itemsUpdateArgs>(args: SelectSubset<T, invoices_itemsUpdateArgs<ExtArgs>>): Prisma__invoices_itemsClient<$Result.GetResult<Prisma.$invoices_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices_items.
     * @param {invoices_itemsDeleteManyArgs} args - Arguments to filter Invoices_items to delete.
     * @example
     * // Delete a few Invoices_items
     * const { count } = await prisma.invoices_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoices_itemsDeleteManyArgs>(args?: SelectSubset<T, invoices_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoices_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices_items
     * const invoices_items = await prisma.invoices_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoices_itemsUpdateManyArgs>(args: SelectSubset<T, invoices_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices_items and returns the data updated in the database.
     * @param {invoices_itemsUpdateManyAndReturnArgs} args - Arguments to update many Invoices_items.
     * @example
     * // Update many Invoices_items
     * const invoices_items = await prisma.invoices_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices_items and only return the `id`
     * const invoices_itemsWithIdOnly = await prisma.invoices_items.updateManyAndReturn({
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
    updateManyAndReturn<T extends invoices_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, invoices_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoices_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoices_items.
     * @param {invoices_itemsUpsertArgs} args - Arguments to update or create a Invoices_items.
     * @example
     * // Update or create a Invoices_items
     * const invoices_items = await prisma.invoices_items.upsert({
     *   create: {
     *     // ... data to create a Invoices_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoices_items we want to update
     *   }
     * })
     */
    upsert<T extends invoices_itemsUpsertArgs>(args: SelectSubset<T, invoices_itemsUpsertArgs<ExtArgs>>): Prisma__invoices_itemsClient<$Result.GetResult<Prisma.$invoices_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoices_itemsCountArgs} args - Arguments to filter Invoices_items to count.
     * @example
     * // Count the number of Invoices_items
     * const count = await prisma.invoices_items.count({
     *   where: {
     *     // ... the filter for the Invoices_items we want to count
     *   }
     * })
    **/
    count<T extends invoices_itemsCountArgs>(
      args?: Subset<T, invoices_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Invoices_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoices_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invoices_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Invoices_itemsAggregateArgs>(args: Subset<T, Invoices_itemsAggregateArgs>): Prisma.PrismaPromise<GetInvoices_itemsAggregateType<T>>

    /**
     * Group by Invoices_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoices_itemsGroupByArgs} args - Group by arguments.
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
      T extends invoices_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoices_itemsGroupByArgs['orderBy'] }
        : { orderBy?: invoices_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, invoices_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoices_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoices_items model
   */
  readonly fields: invoices_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoices_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoices_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends invoicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, invoicesDefaultArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the invoices_items model
   */
  interface invoices_itemsFieldRefs {
    readonly id: FieldRef<"invoices_items", 'String'>
    readonly invoice_id: FieldRef<"invoices_items", 'String'>
    readonly product_id: FieldRef<"invoices_items", 'String'>
    readonly quantity: FieldRef<"invoices_items", 'Int'>
    readonly total: FieldRef<"invoices_items", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * invoices_items findUnique
   */
  export type invoices_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices_items
     */
    select?: invoices_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices_items
     */
    omit?: invoices_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoices_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoices_items to fetch.
     */
    where: invoices_itemsWhereUniqueInput
  }

  /**
   * invoices_items findUniqueOrThrow
   */
  export type invoices_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices_items
     */
    select?: invoices_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices_items
     */
    omit?: invoices_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoices_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoices_items to fetch.
     */
    where: invoices_itemsWhereUniqueInput
  }

  /**
   * invoices_items findFirst
   */
  export type invoices_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices_items
     */
    select?: invoices_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices_items
     */
    omit?: invoices_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoices_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoices_items to fetch.
     */
    where?: invoices_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices_items to fetch.
     */
    orderBy?: invoices_itemsOrderByWithRelationInput | invoices_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices_items.
     */
    cursor?: invoices_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices_items.
     */
    distinct?: Invoices_itemsScalarFieldEnum | Invoices_itemsScalarFieldEnum[]
  }

  /**
   * invoices_items findFirstOrThrow
   */
  export type invoices_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices_items
     */
    select?: invoices_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices_items
     */
    omit?: invoices_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoices_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoices_items to fetch.
     */
    where?: invoices_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices_items to fetch.
     */
    orderBy?: invoices_itemsOrderByWithRelationInput | invoices_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices_items.
     */
    cursor?: invoices_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices_items.
     */
    distinct?: Invoices_itemsScalarFieldEnum | Invoices_itemsScalarFieldEnum[]
  }

  /**
   * invoices_items findMany
   */
  export type invoices_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices_items
     */
    select?: invoices_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices_items
     */
    omit?: invoices_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoices_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoices_items to fetch.
     */
    where?: invoices_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices_items to fetch.
     */
    orderBy?: invoices_itemsOrderByWithRelationInput | invoices_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoices_items.
     */
    cursor?: invoices_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices_items.
     */
    skip?: number
    distinct?: Invoices_itemsScalarFieldEnum | Invoices_itemsScalarFieldEnum[]
  }

  /**
   * invoices_items create
   */
  export type invoices_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices_items
     */
    select?: invoices_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices_items
     */
    omit?: invoices_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoices_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a invoices_items.
     */
    data: XOR<invoices_itemsCreateInput, invoices_itemsUncheckedCreateInput>
  }

  /**
   * invoices_items createMany
   */
  export type invoices_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices_items.
     */
    data: invoices_itemsCreateManyInput | invoices_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoices_items createManyAndReturn
   */
  export type invoices_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices_items
     */
    select?: invoices_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoices_items
     */
    omit?: invoices_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many invoices_items.
     */
    data: invoices_itemsCreateManyInput | invoices_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoices_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoices_items update
   */
  export type invoices_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices_items
     */
    select?: invoices_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices_items
     */
    omit?: invoices_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoices_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a invoices_items.
     */
    data: XOR<invoices_itemsUpdateInput, invoices_itemsUncheckedUpdateInput>
    /**
     * Choose, which invoices_items to update.
     */
    where: invoices_itemsWhereUniqueInput
  }

  /**
   * invoices_items updateMany
   */
  export type invoices_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices_items.
     */
    data: XOR<invoices_itemsUpdateManyMutationInput, invoices_itemsUncheckedUpdateManyInput>
    /**
     * Filter which invoices_items to update
     */
    where?: invoices_itemsWhereInput
    /**
     * Limit how many invoices_items to update.
     */
    limit?: number
  }

  /**
   * invoices_items updateManyAndReturn
   */
  export type invoices_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices_items
     */
    select?: invoices_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoices_items
     */
    omit?: invoices_itemsOmit<ExtArgs> | null
    /**
     * The data used to update invoices_items.
     */
    data: XOR<invoices_itemsUpdateManyMutationInput, invoices_itemsUncheckedUpdateManyInput>
    /**
     * Filter which invoices_items to update
     */
    where?: invoices_itemsWhereInput
    /**
     * Limit how many invoices_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoices_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoices_items upsert
   */
  export type invoices_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices_items
     */
    select?: invoices_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices_items
     */
    omit?: invoices_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoices_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the invoices_items to update in case it exists.
     */
    where: invoices_itemsWhereUniqueInput
    /**
     * In case the invoices_items found by the `where` argument doesn't exist, create a new invoices_items with this data.
     */
    create: XOR<invoices_itemsCreateInput, invoices_itemsUncheckedCreateInput>
    /**
     * In case the invoices_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoices_itemsUpdateInput, invoices_itemsUncheckedUpdateInput>
  }

  /**
   * invoices_items delete
   */
  export type invoices_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices_items
     */
    select?: invoices_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices_items
     */
    omit?: invoices_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoices_itemsInclude<ExtArgs> | null
    /**
     * Filter which invoices_items to delete.
     */
    where: invoices_itemsWhereUniqueInput
  }

  /**
   * invoices_items deleteMany
   */
  export type invoices_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices_items to delete
     */
    where?: invoices_itemsWhereInput
    /**
     * Limit how many invoices_items to delete.
     */
    limit?: number
  }

  /**
   * invoices_items without action
   */
  export type invoices_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices_items
     */
    select?: invoices_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices_items
     */
    omit?: invoices_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoices_itemsInclude<ExtArgs> | null
  }


  /**
   * Model store_metrics
   */

  export type AggregateStore_metrics = {
    _count: Store_metricsCountAggregateOutputType | null
    _avg: Store_metricsAvgAggregateOutputType | null
    _sum: Store_metricsSumAggregateOutputType | null
    _min: Store_metricsMinAggregateOutputType | null
    _max: Store_metricsMaxAggregateOutputType | null
  }

  export type Store_metricsAvgAggregateOutputType = {
    rating: number | null
    total_sales: number | null
    new_customers: number | null
    total_products: number | null
  }

  export type Store_metricsSumAggregateOutputType = {
    rating: number | null
    total_sales: number | null
    new_customers: number | null
    total_products: number | null
  }

  export type Store_metricsMinAggregateOutputType = {
    id: string | null
    rating: number | null
    total_sales: number | null
    new_customers: number | null
    total_products: number | null
    updatedAt: Date | null
  }

  export type Store_metricsMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    total_sales: number | null
    new_customers: number | null
    total_products: number | null
    updatedAt: Date | null
  }

  export type Store_metricsCountAggregateOutputType = {
    id: number
    rating: number
    total_sales: number
    new_customers: number
    total_products: number
    updatedAt: number
    _all: number
  }


  export type Store_metricsAvgAggregateInputType = {
    rating?: true
    total_sales?: true
    new_customers?: true
    total_products?: true
  }

  export type Store_metricsSumAggregateInputType = {
    rating?: true
    total_sales?: true
    new_customers?: true
    total_products?: true
  }

  export type Store_metricsMinAggregateInputType = {
    id?: true
    rating?: true
    total_sales?: true
    new_customers?: true
    total_products?: true
    updatedAt?: true
  }

  export type Store_metricsMaxAggregateInputType = {
    id?: true
    rating?: true
    total_sales?: true
    new_customers?: true
    total_products?: true
    updatedAt?: true
  }

  export type Store_metricsCountAggregateInputType = {
    id?: true
    rating?: true
    total_sales?: true
    new_customers?: true
    total_products?: true
    updatedAt?: true
    _all?: true
  }

  export type Store_metricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which store_metrics to aggregate.
     */
    where?: store_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of store_metrics to fetch.
     */
    orderBy?: store_metricsOrderByWithRelationInput | store_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: store_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` store_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` store_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned store_metrics
    **/
    _count?: true | Store_metricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Store_metricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Store_metricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Store_metricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Store_metricsMaxAggregateInputType
  }

  export type GetStore_metricsAggregateType<T extends Store_metricsAggregateArgs> = {
        [P in keyof T & keyof AggregateStore_metrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore_metrics[P]>
      : GetScalarType<T[P], AggregateStore_metrics[P]>
  }




  export type store_metricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: store_metricsWhereInput
    orderBy?: store_metricsOrderByWithAggregationInput | store_metricsOrderByWithAggregationInput[]
    by: Store_metricsScalarFieldEnum[] | Store_metricsScalarFieldEnum
    having?: store_metricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Store_metricsCountAggregateInputType | true
    _avg?: Store_metricsAvgAggregateInputType
    _sum?: Store_metricsSumAggregateInputType
    _min?: Store_metricsMinAggregateInputType
    _max?: Store_metricsMaxAggregateInputType
  }

  export type Store_metricsGroupByOutputType = {
    id: string
    rating: number
    total_sales: number
    new_customers: number
    total_products: number
    updatedAt: Date
    _count: Store_metricsCountAggregateOutputType | null
    _avg: Store_metricsAvgAggregateOutputType | null
    _sum: Store_metricsSumAggregateOutputType | null
    _min: Store_metricsMinAggregateOutputType | null
    _max: Store_metricsMaxAggregateOutputType | null
  }

  type GetStore_metricsGroupByPayload<T extends store_metricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Store_metricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Store_metricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Store_metricsGroupByOutputType[P]>
            : GetScalarType<T[P], Store_metricsGroupByOutputType[P]>
        }
      >
    >


  export type store_metricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    total_sales?: boolean
    new_customers?: boolean
    total_products?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["store_metrics"]>

  export type store_metricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    total_sales?: boolean
    new_customers?: boolean
    total_products?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["store_metrics"]>

  export type store_metricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    total_sales?: boolean
    new_customers?: boolean
    total_products?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["store_metrics"]>

  export type store_metricsSelectScalar = {
    id?: boolean
    rating?: boolean
    total_sales?: boolean
    new_customers?: boolean
    total_products?: boolean
    updatedAt?: boolean
  }

  export type store_metricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "total_sales" | "new_customers" | "total_products" | "updatedAt", ExtArgs["result"]["store_metrics"]>

  export type $store_metricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "store_metrics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      total_sales: number
      new_customers: number
      total_products: number
      updatedAt: Date
    }, ExtArgs["result"]["store_metrics"]>
    composites: {}
  }

  type store_metricsGetPayload<S extends boolean | null | undefined | store_metricsDefaultArgs> = $Result.GetResult<Prisma.$store_metricsPayload, S>

  type store_metricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<store_metricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Store_metricsCountAggregateInputType | true
    }

  export interface store_metricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['store_metrics'], meta: { name: 'store_metrics' } }
    /**
     * Find zero or one Store_metrics that matches the filter.
     * @param {store_metricsFindUniqueArgs} args - Arguments to find a Store_metrics
     * @example
     * // Get one Store_metrics
     * const store_metrics = await prisma.store_metrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends store_metricsFindUniqueArgs>(args: SelectSubset<T, store_metricsFindUniqueArgs<ExtArgs>>): Prisma__store_metricsClient<$Result.GetResult<Prisma.$store_metricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store_metrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {store_metricsFindUniqueOrThrowArgs} args - Arguments to find a Store_metrics
     * @example
     * // Get one Store_metrics
     * const store_metrics = await prisma.store_metrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends store_metricsFindUniqueOrThrowArgs>(args: SelectSubset<T, store_metricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__store_metricsClient<$Result.GetResult<Prisma.$store_metricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store_metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_metricsFindFirstArgs} args - Arguments to find a Store_metrics
     * @example
     * // Get one Store_metrics
     * const store_metrics = await prisma.store_metrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends store_metricsFindFirstArgs>(args?: SelectSubset<T, store_metricsFindFirstArgs<ExtArgs>>): Prisma__store_metricsClient<$Result.GetResult<Prisma.$store_metricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store_metrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_metricsFindFirstOrThrowArgs} args - Arguments to find a Store_metrics
     * @example
     * // Get one Store_metrics
     * const store_metrics = await prisma.store_metrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends store_metricsFindFirstOrThrowArgs>(args?: SelectSubset<T, store_metricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__store_metricsClient<$Result.GetResult<Prisma.$store_metricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Store_metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_metricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Store_metrics
     * const store_metrics = await prisma.store_metrics.findMany()
     * 
     * // Get first 10 Store_metrics
     * const store_metrics = await prisma.store_metrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const store_metricsWithIdOnly = await prisma.store_metrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends store_metricsFindManyArgs>(args?: SelectSubset<T, store_metricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$store_metricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store_metrics.
     * @param {store_metricsCreateArgs} args - Arguments to create a Store_metrics.
     * @example
     * // Create one Store_metrics
     * const Store_metrics = await prisma.store_metrics.create({
     *   data: {
     *     // ... data to create a Store_metrics
     *   }
     * })
     * 
     */
    create<T extends store_metricsCreateArgs>(args: SelectSubset<T, store_metricsCreateArgs<ExtArgs>>): Prisma__store_metricsClient<$Result.GetResult<Prisma.$store_metricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Store_metrics.
     * @param {store_metricsCreateManyArgs} args - Arguments to create many Store_metrics.
     * @example
     * // Create many Store_metrics
     * const store_metrics = await prisma.store_metrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends store_metricsCreateManyArgs>(args?: SelectSubset<T, store_metricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Store_metrics and returns the data saved in the database.
     * @param {store_metricsCreateManyAndReturnArgs} args - Arguments to create many Store_metrics.
     * @example
     * // Create many Store_metrics
     * const store_metrics = await prisma.store_metrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Store_metrics and only return the `id`
     * const store_metricsWithIdOnly = await prisma.store_metrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends store_metricsCreateManyAndReturnArgs>(args?: SelectSubset<T, store_metricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$store_metricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Store_metrics.
     * @param {store_metricsDeleteArgs} args - Arguments to delete one Store_metrics.
     * @example
     * // Delete one Store_metrics
     * const Store_metrics = await prisma.store_metrics.delete({
     *   where: {
     *     // ... filter to delete one Store_metrics
     *   }
     * })
     * 
     */
    delete<T extends store_metricsDeleteArgs>(args: SelectSubset<T, store_metricsDeleteArgs<ExtArgs>>): Prisma__store_metricsClient<$Result.GetResult<Prisma.$store_metricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store_metrics.
     * @param {store_metricsUpdateArgs} args - Arguments to update one Store_metrics.
     * @example
     * // Update one Store_metrics
     * const store_metrics = await prisma.store_metrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends store_metricsUpdateArgs>(args: SelectSubset<T, store_metricsUpdateArgs<ExtArgs>>): Prisma__store_metricsClient<$Result.GetResult<Prisma.$store_metricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Store_metrics.
     * @param {store_metricsDeleteManyArgs} args - Arguments to filter Store_metrics to delete.
     * @example
     * // Delete a few Store_metrics
     * const { count } = await prisma.store_metrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends store_metricsDeleteManyArgs>(args?: SelectSubset<T, store_metricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Store_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_metricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Store_metrics
     * const store_metrics = await prisma.store_metrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends store_metricsUpdateManyArgs>(args: SelectSubset<T, store_metricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Store_metrics and returns the data updated in the database.
     * @param {store_metricsUpdateManyAndReturnArgs} args - Arguments to update many Store_metrics.
     * @example
     * // Update many Store_metrics
     * const store_metrics = await prisma.store_metrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Store_metrics and only return the `id`
     * const store_metricsWithIdOnly = await prisma.store_metrics.updateManyAndReturn({
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
    updateManyAndReturn<T extends store_metricsUpdateManyAndReturnArgs>(args: SelectSubset<T, store_metricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$store_metricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Store_metrics.
     * @param {store_metricsUpsertArgs} args - Arguments to update or create a Store_metrics.
     * @example
     * // Update or create a Store_metrics
     * const store_metrics = await prisma.store_metrics.upsert({
     *   create: {
     *     // ... data to create a Store_metrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store_metrics we want to update
     *   }
     * })
     */
    upsert<T extends store_metricsUpsertArgs>(args: SelectSubset<T, store_metricsUpsertArgs<ExtArgs>>): Prisma__store_metricsClient<$Result.GetResult<Prisma.$store_metricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Store_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_metricsCountArgs} args - Arguments to filter Store_metrics to count.
     * @example
     * // Count the number of Store_metrics
     * const count = await prisma.store_metrics.count({
     *   where: {
     *     // ... the filter for the Store_metrics we want to count
     *   }
     * })
    **/
    count<T extends store_metricsCountArgs>(
      args?: Subset<T, store_metricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Store_metricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Store_metricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Store_metricsAggregateArgs>(args: Subset<T, Store_metricsAggregateArgs>): Prisma.PrismaPromise<GetStore_metricsAggregateType<T>>

    /**
     * Group by Store_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_metricsGroupByArgs} args - Group by arguments.
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
      T extends store_metricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: store_metricsGroupByArgs['orderBy'] }
        : { orderBy?: store_metricsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, store_metricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStore_metricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the store_metrics model
   */
  readonly fields: store_metricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for store_metrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__store_metricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the store_metrics model
   */
  interface store_metricsFieldRefs {
    readonly id: FieldRef<"store_metrics", 'String'>
    readonly rating: FieldRef<"store_metrics", 'Float'>
    readonly total_sales: FieldRef<"store_metrics", 'Int'>
    readonly new_customers: FieldRef<"store_metrics", 'Int'>
    readonly total_products: FieldRef<"store_metrics", 'Int'>
    readonly updatedAt: FieldRef<"store_metrics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * store_metrics findUnique
   */
  export type store_metricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_metrics
     */
    select?: store_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_metrics
     */
    omit?: store_metricsOmit<ExtArgs> | null
    /**
     * Filter, which store_metrics to fetch.
     */
    where: store_metricsWhereUniqueInput
  }

  /**
   * store_metrics findUniqueOrThrow
   */
  export type store_metricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_metrics
     */
    select?: store_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_metrics
     */
    omit?: store_metricsOmit<ExtArgs> | null
    /**
     * Filter, which store_metrics to fetch.
     */
    where: store_metricsWhereUniqueInput
  }

  /**
   * store_metrics findFirst
   */
  export type store_metricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_metrics
     */
    select?: store_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_metrics
     */
    omit?: store_metricsOmit<ExtArgs> | null
    /**
     * Filter, which store_metrics to fetch.
     */
    where?: store_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of store_metrics to fetch.
     */
    orderBy?: store_metricsOrderByWithRelationInput | store_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for store_metrics.
     */
    cursor?: store_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` store_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` store_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of store_metrics.
     */
    distinct?: Store_metricsScalarFieldEnum | Store_metricsScalarFieldEnum[]
  }

  /**
   * store_metrics findFirstOrThrow
   */
  export type store_metricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_metrics
     */
    select?: store_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_metrics
     */
    omit?: store_metricsOmit<ExtArgs> | null
    /**
     * Filter, which store_metrics to fetch.
     */
    where?: store_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of store_metrics to fetch.
     */
    orderBy?: store_metricsOrderByWithRelationInput | store_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for store_metrics.
     */
    cursor?: store_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` store_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` store_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of store_metrics.
     */
    distinct?: Store_metricsScalarFieldEnum | Store_metricsScalarFieldEnum[]
  }

  /**
   * store_metrics findMany
   */
  export type store_metricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_metrics
     */
    select?: store_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_metrics
     */
    omit?: store_metricsOmit<ExtArgs> | null
    /**
     * Filter, which store_metrics to fetch.
     */
    where?: store_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of store_metrics to fetch.
     */
    orderBy?: store_metricsOrderByWithRelationInput | store_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing store_metrics.
     */
    cursor?: store_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` store_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` store_metrics.
     */
    skip?: number
    distinct?: Store_metricsScalarFieldEnum | Store_metricsScalarFieldEnum[]
  }

  /**
   * store_metrics create
   */
  export type store_metricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_metrics
     */
    select?: store_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_metrics
     */
    omit?: store_metricsOmit<ExtArgs> | null
    /**
     * The data needed to create a store_metrics.
     */
    data: XOR<store_metricsCreateInput, store_metricsUncheckedCreateInput>
  }

  /**
   * store_metrics createMany
   */
  export type store_metricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many store_metrics.
     */
    data: store_metricsCreateManyInput | store_metricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * store_metrics createManyAndReturn
   */
  export type store_metricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_metrics
     */
    select?: store_metricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the store_metrics
     */
    omit?: store_metricsOmit<ExtArgs> | null
    /**
     * The data used to create many store_metrics.
     */
    data: store_metricsCreateManyInput | store_metricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * store_metrics update
   */
  export type store_metricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_metrics
     */
    select?: store_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_metrics
     */
    omit?: store_metricsOmit<ExtArgs> | null
    /**
     * The data needed to update a store_metrics.
     */
    data: XOR<store_metricsUpdateInput, store_metricsUncheckedUpdateInput>
    /**
     * Choose, which store_metrics to update.
     */
    where: store_metricsWhereUniqueInput
  }

  /**
   * store_metrics updateMany
   */
  export type store_metricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update store_metrics.
     */
    data: XOR<store_metricsUpdateManyMutationInput, store_metricsUncheckedUpdateManyInput>
    /**
     * Filter which store_metrics to update
     */
    where?: store_metricsWhereInput
    /**
     * Limit how many store_metrics to update.
     */
    limit?: number
  }

  /**
   * store_metrics updateManyAndReturn
   */
  export type store_metricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_metrics
     */
    select?: store_metricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the store_metrics
     */
    omit?: store_metricsOmit<ExtArgs> | null
    /**
     * The data used to update store_metrics.
     */
    data: XOR<store_metricsUpdateManyMutationInput, store_metricsUncheckedUpdateManyInput>
    /**
     * Filter which store_metrics to update
     */
    where?: store_metricsWhereInput
    /**
     * Limit how many store_metrics to update.
     */
    limit?: number
  }

  /**
   * store_metrics upsert
   */
  export type store_metricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_metrics
     */
    select?: store_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_metrics
     */
    omit?: store_metricsOmit<ExtArgs> | null
    /**
     * The filter to search for the store_metrics to update in case it exists.
     */
    where: store_metricsWhereUniqueInput
    /**
     * In case the store_metrics found by the `where` argument doesn't exist, create a new store_metrics with this data.
     */
    create: XOR<store_metricsCreateInput, store_metricsUncheckedCreateInput>
    /**
     * In case the store_metrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<store_metricsUpdateInput, store_metricsUncheckedUpdateInput>
  }

  /**
   * store_metrics delete
   */
  export type store_metricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_metrics
     */
    select?: store_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_metrics
     */
    omit?: store_metricsOmit<ExtArgs> | null
    /**
     * Filter which store_metrics to delete.
     */
    where: store_metricsWhereUniqueInput
  }

  /**
   * store_metrics deleteMany
   */
  export type store_metricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which store_metrics to delete
     */
    where?: store_metricsWhereInput
    /**
     * Limit how many store_metrics to delete.
     */
    limit?: number
  }

  /**
   * store_metrics without action
   */
  export type store_metricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_metrics
     */
    select?: store_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store_metrics
     */
    omit?: store_metricsOmit<ExtArgs> | null
  }


  /**
   * Model invoices
   */

  export type AggregateInvoices = {
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  export type InvoicesAvgAggregateOutputType = {
    amount: number | null
  }

  export type InvoicesSumAggregateOutputType = {
    amount: number | null
  }

  export type InvoicesMinAggregateOutputType = {
    id: string | null
    date: Date | null
    amount: number | null
    status: string | null
  }

  export type InvoicesMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    amount: number | null
    status: string | null
  }

  export type InvoicesCountAggregateOutputType = {
    id: number
    date: number
    amount: number
    status: number
    _all: number
  }


  export type InvoicesAvgAggregateInputType = {
    amount?: true
  }

  export type InvoicesSumAggregateInputType = {
    amount?: true
  }

  export type InvoicesMinAggregateInputType = {
    id?: true
    date?: true
    amount?: true
    status?: true
  }

  export type InvoicesMaxAggregateInputType = {
    id?: true
    date?: true
    amount?: true
    status?: true
  }

  export type InvoicesCountAggregateInputType = {
    id?: true
    date?: true
    amount?: true
    status?: true
    _all?: true
  }

  export type InvoicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to aggregate.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoices
    **/
    _count?: true | InvoicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoicesMaxAggregateInputType
  }

  export type GetInvoicesAggregateType<T extends InvoicesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoices[P]>
      : GetScalarType<T[P], AggregateInvoices[P]>
  }




  export type invoicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithAggregationInput | invoicesOrderByWithAggregationInput[]
    by: InvoicesScalarFieldEnum[] | InvoicesScalarFieldEnum
    having?: invoicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoicesCountAggregateInputType | true
    _avg?: InvoicesAvgAggregateInputType
    _sum?: InvoicesSumAggregateInputType
    _min?: InvoicesMinAggregateInputType
    _max?: InvoicesMaxAggregateInputType
  }

  export type InvoicesGroupByOutputType = {
    id: string
    date: Date
    amount: number
    status: string
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  type GetInvoicesGroupByPayload<T extends invoicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
            : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
        }
      >
    >


  export type invoicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    amount?: boolean
    status?: boolean
    items?: boolean | invoices$itemsArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    amount?: boolean
    status?: boolean
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    amount?: boolean
    status?: boolean
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectScalar = {
    id?: boolean
    date?: boolean
    amount?: boolean
    status?: boolean
  }

  export type invoicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "amount" | "status", ExtArgs["result"]["invoices"]>
  export type invoicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | invoices$itemsArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type invoicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type invoicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $invoicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoices"
    objects: {
      items: Prisma.$invoices_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      amount: number
      status: string
    }, ExtArgs["result"]["invoices"]>
    composites: {}
  }

  type invoicesGetPayload<S extends boolean | null | undefined | invoicesDefaultArgs> = $Result.GetResult<Prisma.$invoicesPayload, S>

  type invoicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoicesCountAggregateInputType | true
    }

  export interface invoicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoices'], meta: { name: 'invoices' } }
    /**
     * Find zero or one Invoices that matches the filter.
     * @param {invoicesFindUniqueArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoicesFindUniqueArgs>(args: SelectSubset<T, invoicesFindUniqueArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoicesFindUniqueOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoicesFindUniqueOrThrowArgs>(args: SelectSubset<T, invoicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoicesFindFirstArgs>(args?: SelectSubset<T, invoicesFindFirstArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoicesFindFirstOrThrowArgs>(args?: SelectSubset<T, invoicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoices.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoicesWithIdOnly = await prisma.invoices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoicesFindManyArgs>(args?: SelectSubset<T, invoicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoices.
     * @param {invoicesCreateArgs} args - Arguments to create a Invoices.
     * @example
     * // Create one Invoices
     * const Invoices = await prisma.invoices.create({
     *   data: {
     *     // ... data to create a Invoices
     *   }
     * })
     * 
     */
    create<T extends invoicesCreateArgs>(args: SelectSubset<T, invoicesCreateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {invoicesCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoicesCreateManyArgs>(args?: SelectSubset<T, invoicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {invoicesCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoicesCreateManyAndReturnArgs>(args?: SelectSubset<T, invoicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoices.
     * @param {invoicesDeleteArgs} args - Arguments to delete one Invoices.
     * @example
     * // Delete one Invoices
     * const Invoices = await prisma.invoices.delete({
     *   where: {
     *     // ... filter to delete one Invoices
     *   }
     * })
     * 
     */
    delete<T extends invoicesDeleteArgs>(args: SelectSubset<T, invoicesDeleteArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoices.
     * @param {invoicesUpdateArgs} args - Arguments to update one Invoices.
     * @example
     * // Update one Invoices
     * const invoices = await prisma.invoices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoicesUpdateArgs>(args: SelectSubset<T, invoicesUpdateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {invoicesDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoicesDeleteManyArgs>(args?: SelectSubset<T, invoicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoicesUpdateManyArgs>(args: SelectSubset<T, invoicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {invoicesUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.updateManyAndReturn({
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
    updateManyAndReturn<T extends invoicesUpdateManyAndReturnArgs>(args: SelectSubset<T, invoicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoices.
     * @param {invoicesUpsertArgs} args - Arguments to update or create a Invoices.
     * @example
     * // Update or create a Invoices
     * const invoices = await prisma.invoices.upsert({
     *   create: {
     *     // ... data to create a Invoices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoices we want to update
     *   }
     * })
     */
    upsert<T extends invoicesUpsertArgs>(args: SelectSubset<T, invoicesUpsertArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoices.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends invoicesCountArgs>(
      args?: Subset<T, invoicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoicesAggregateArgs>(args: Subset<T, InvoicesAggregateArgs>): Prisma.PrismaPromise<GetInvoicesAggregateType<T>>

    /**
     * Group by Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesGroupByArgs} args - Group by arguments.
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
      T extends invoicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoicesGroupByArgs['orderBy'] }
        : { orderBy?: invoicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, invoicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoices model
   */
  readonly fields: invoicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends invoices$itemsArgs<ExtArgs> = {}>(args?: Subset<T, invoices$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoices_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the invoices model
   */
  interface invoicesFieldRefs {
    readonly id: FieldRef<"invoices", 'String'>
    readonly date: FieldRef<"invoices", 'DateTime'>
    readonly amount: FieldRef<"invoices", 'Int'>
    readonly status: FieldRef<"invoices", 'String'>
  }
    

  // Custom InputTypes
  /**
   * invoices findUnique
   */
  export type invoicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findUniqueOrThrow
   */
  export type invoicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findFirst
   */
  export type invoicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findFirstOrThrow
   */
  export type invoicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findMany
   */
  export type invoicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices create
   */
  export type invoicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to create a invoices.
     */
    data: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
  }

  /**
   * invoices createMany
   */
  export type invoicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoices createManyAndReturn
   */
  export type invoicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoices update
   */
  export type invoicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to update a invoices.
     */
    data: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
    /**
     * Choose, which invoices to update.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices updateMany
   */
  export type invoicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
  }

  /**
   * invoices updateManyAndReturn
   */
  export type invoicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * The data used to update invoices.
     */
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
  }

  /**
   * invoices upsert
   */
  export type invoicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The filter to search for the invoices to update in case it exists.
     */
    where: invoicesWhereUniqueInput
    /**
     * In case the invoices found by the `where` argument doesn't exist, create a new invoices with this data.
     */
    create: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
    /**
     * In case the invoices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
  }

  /**
   * invoices delete
   */
  export type invoicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter which invoices to delete.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices deleteMany
   */
  export type invoicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to delete
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to delete.
     */
    limit?: number
  }

  /**
   * invoices.items
   */
  export type invoices$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices_items
     */
    select?: invoices_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices_items
     */
    omit?: invoices_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoices_itemsInclude<ExtArgs> | null
    where?: invoices_itemsWhereInput
    orderBy?: invoices_itemsOrderByWithRelationInput | invoices_itemsOrderByWithRelationInput[]
    cursor?: invoices_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invoices_itemsScalarFieldEnum | Invoices_itemsScalarFieldEnum[]
  }

  /**
   * invoices without action
   */
  export type invoicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
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


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    image_url: 'image_url',
    sold_count: 'sold_count',
    createdAt: 'createdAt'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const Invoices_itemsScalarFieldEnum: {
    id: 'id',
    invoice_id: 'invoice_id',
    product_id: 'product_id',
    quantity: 'quantity',
    total: 'total'
  };

  export type Invoices_itemsScalarFieldEnum = (typeof Invoices_itemsScalarFieldEnum)[keyof typeof Invoices_itemsScalarFieldEnum]


  export const Store_metricsScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    total_sales: 'total_sales',
    new_customers: 'new_customers',
    total_products: 'total_products',
    updatedAt: 'updatedAt'
  };

  export type Store_metricsScalarFieldEnum = (typeof Store_metricsScalarFieldEnum)[keyof typeof Store_metricsScalarFieldEnum]


  export const InvoicesScalarFieldEnum: {
    id: 'id',
    date: 'date',
    amount: 'amount',
    status: 'status'
  };

  export type InvoicesScalarFieldEnum = (typeof InvoicesScalarFieldEnum)[keyof typeof InvoicesScalarFieldEnum]


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


  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: UuidFilter<"products"> | string
    name?: StringFilter<"products"> | string
    price?: IntFilter<"products"> | number
    image_url?: StringFilter<"products"> | string
    sold_count?: IntFilter<"products"> | number
    createdAt?: DateTimeFilter<"products"> | Date | string
    invoices?: Invoices_itemsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    sold_count?: SortOrder
    createdAt?: SortOrder
    invoices?: invoices_itemsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    price?: IntFilter<"products"> | number
    image_url?: StringFilter<"products"> | string
    sold_count?: IntFilter<"products"> | number
    createdAt?: DateTimeFilter<"products"> | Date | string
    invoices?: Invoices_itemsListRelationFilter
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    sold_count?: SortOrder
    createdAt?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"products"> | string
    name?: StringWithAggregatesFilter<"products"> | string
    price?: IntWithAggregatesFilter<"products"> | number
    image_url?: StringWithAggregatesFilter<"products"> | string
    sold_count?: IntWithAggregatesFilter<"products"> | number
    createdAt?: DateTimeWithAggregatesFilter<"products"> | Date | string
  }

  export type invoices_itemsWhereInput = {
    AND?: invoices_itemsWhereInput | invoices_itemsWhereInput[]
    OR?: invoices_itemsWhereInput[]
    NOT?: invoices_itemsWhereInput | invoices_itemsWhereInput[]
    id?: UuidFilter<"invoices_items"> | string
    invoice_id?: UuidFilter<"invoices_items"> | string
    product_id?: UuidFilter<"invoices_items"> | string
    quantity?: IntFilter<"invoices_items"> | number
    total?: IntFilter<"invoices_items"> | number
    invoice?: XOR<InvoicesScalarRelationFilter, invoicesWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type invoices_itemsOrderByWithRelationInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    invoice?: invoicesOrderByWithRelationInput
    product?: productsOrderByWithRelationInput
  }

  export type invoices_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: invoices_itemsWhereInput | invoices_itemsWhereInput[]
    OR?: invoices_itemsWhereInput[]
    NOT?: invoices_itemsWhereInput | invoices_itemsWhereInput[]
    invoice_id?: UuidFilter<"invoices_items"> | string
    product_id?: UuidFilter<"invoices_items"> | string
    quantity?: IntFilter<"invoices_items"> | number
    total?: IntFilter<"invoices_items"> | number
    invoice?: XOR<InvoicesScalarRelationFilter, invoicesWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type invoices_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    _count?: invoices_itemsCountOrderByAggregateInput
    _avg?: invoices_itemsAvgOrderByAggregateInput
    _max?: invoices_itemsMaxOrderByAggregateInput
    _min?: invoices_itemsMinOrderByAggregateInput
    _sum?: invoices_itemsSumOrderByAggregateInput
  }

  export type invoices_itemsScalarWhereWithAggregatesInput = {
    AND?: invoices_itemsScalarWhereWithAggregatesInput | invoices_itemsScalarWhereWithAggregatesInput[]
    OR?: invoices_itemsScalarWhereWithAggregatesInput[]
    NOT?: invoices_itemsScalarWhereWithAggregatesInput | invoices_itemsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"invoices_items"> | string
    invoice_id?: UuidWithAggregatesFilter<"invoices_items"> | string
    product_id?: UuidWithAggregatesFilter<"invoices_items"> | string
    quantity?: IntWithAggregatesFilter<"invoices_items"> | number
    total?: IntWithAggregatesFilter<"invoices_items"> | number
  }

  export type store_metricsWhereInput = {
    AND?: store_metricsWhereInput | store_metricsWhereInput[]
    OR?: store_metricsWhereInput[]
    NOT?: store_metricsWhereInput | store_metricsWhereInput[]
    id?: UuidFilter<"store_metrics"> | string
    rating?: FloatFilter<"store_metrics"> | number
    total_sales?: IntFilter<"store_metrics"> | number
    new_customers?: IntFilter<"store_metrics"> | number
    total_products?: IntFilter<"store_metrics"> | number
    updatedAt?: DateTimeFilter<"store_metrics"> | Date | string
  }

  export type store_metricsOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    total_sales?: SortOrder
    new_customers?: SortOrder
    total_products?: SortOrder
    updatedAt?: SortOrder
  }

  export type store_metricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: store_metricsWhereInput | store_metricsWhereInput[]
    OR?: store_metricsWhereInput[]
    NOT?: store_metricsWhereInput | store_metricsWhereInput[]
    rating?: FloatFilter<"store_metrics"> | number
    total_sales?: IntFilter<"store_metrics"> | number
    new_customers?: IntFilter<"store_metrics"> | number
    total_products?: IntFilter<"store_metrics"> | number
    updatedAt?: DateTimeFilter<"store_metrics"> | Date | string
  }, "id">

  export type store_metricsOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    total_sales?: SortOrder
    new_customers?: SortOrder
    total_products?: SortOrder
    updatedAt?: SortOrder
    _count?: store_metricsCountOrderByAggregateInput
    _avg?: store_metricsAvgOrderByAggregateInput
    _max?: store_metricsMaxOrderByAggregateInput
    _min?: store_metricsMinOrderByAggregateInput
    _sum?: store_metricsSumOrderByAggregateInput
  }

  export type store_metricsScalarWhereWithAggregatesInput = {
    AND?: store_metricsScalarWhereWithAggregatesInput | store_metricsScalarWhereWithAggregatesInput[]
    OR?: store_metricsScalarWhereWithAggregatesInput[]
    NOT?: store_metricsScalarWhereWithAggregatesInput | store_metricsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"store_metrics"> | string
    rating?: FloatWithAggregatesFilter<"store_metrics"> | number
    total_sales?: IntWithAggregatesFilter<"store_metrics"> | number
    new_customers?: IntWithAggregatesFilter<"store_metrics"> | number
    total_products?: IntWithAggregatesFilter<"store_metrics"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"store_metrics"> | Date | string
  }

  export type invoicesWhereInput = {
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    id?: UuidFilter<"invoices"> | string
    date?: DateTimeFilter<"invoices"> | Date | string
    amount?: IntFilter<"invoices"> | number
    status?: StringFilter<"invoices"> | string
    items?: Invoices_itemsListRelationFilter
  }

  export type invoicesOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    items?: invoices_itemsOrderByRelationAggregateInput
  }

  export type invoicesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    date?: DateTimeFilter<"invoices"> | Date | string
    amount?: IntFilter<"invoices"> | number
    status?: StringFilter<"invoices"> | string
    items?: Invoices_itemsListRelationFilter
  }, "id">

  export type invoicesOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    _count?: invoicesCountOrderByAggregateInput
    _avg?: invoicesAvgOrderByAggregateInput
    _max?: invoicesMaxOrderByAggregateInput
    _min?: invoicesMinOrderByAggregateInput
    _sum?: invoicesSumOrderByAggregateInput
  }

  export type invoicesScalarWhereWithAggregatesInput = {
    AND?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    OR?: invoicesScalarWhereWithAggregatesInput[]
    NOT?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"invoices"> | string
    date?: DateTimeWithAggregatesFilter<"invoices"> | Date | string
    amount?: IntWithAggregatesFilter<"invoices"> | number
    status?: StringWithAggregatesFilter<"invoices"> | string
  }

  export type productsCreateInput = {
    id?: string
    name: string
    price: number
    image_url: string
    sold_count?: number
    createdAt?: Date | string
    invoices?: invoices_itemsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    image_url: string
    sold_count?: number
    createdAt?: Date | string
    invoices?: invoices_itemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    sold_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: invoices_itemsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    sold_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: invoices_itemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsCreateManyInput = {
    id?: string
    name: string
    price: number
    image_url: string
    sold_count?: number
    createdAt?: Date | string
  }

  export type productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    sold_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    sold_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoices_itemsCreateInput = {
    id?: string
    quantity: number
    total: number
    invoice: invoicesCreateNestedOneWithoutItemsInput
    product: productsCreateNestedOneWithoutInvoicesInput
  }

  export type invoices_itemsUncheckedCreateInput = {
    id?: string
    invoice_id: string
    product_id: string
    quantity: number
    total: number
  }

  export type invoices_itemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    invoice?: invoicesUpdateOneRequiredWithoutItemsNestedInput
    product?: productsUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type invoices_itemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type invoices_itemsCreateManyInput = {
    id?: string
    invoice_id: string
    product_id: string
    quantity: number
    total: number
  }

  export type invoices_itemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type invoices_itemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type store_metricsCreateInput = {
    id?: string
    rating: number
    total_sales: number
    new_customers: number
    total_products: number
    updatedAt?: Date | string
  }

  export type store_metricsUncheckedCreateInput = {
    id?: string
    rating: number
    total_sales: number
    new_customers: number
    total_products: number
    updatedAt?: Date | string
  }

  export type store_metricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    total_sales?: IntFieldUpdateOperationsInput | number
    new_customers?: IntFieldUpdateOperationsInput | number
    total_products?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type store_metricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    total_sales?: IntFieldUpdateOperationsInput | number
    new_customers?: IntFieldUpdateOperationsInput | number
    total_products?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type store_metricsCreateManyInput = {
    id?: string
    rating: number
    total_sales: number
    new_customers: number
    total_products: number
    updatedAt?: Date | string
  }

  export type store_metricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    total_sales?: IntFieldUpdateOperationsInput | number
    new_customers?: IntFieldUpdateOperationsInput | number
    total_products?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type store_metricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    total_sales?: IntFieldUpdateOperationsInput | number
    new_customers?: IntFieldUpdateOperationsInput | number
    total_products?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesCreateInput = {
    id?: string
    date?: Date | string
    amount: number
    status: string
    items?: invoices_itemsCreateNestedManyWithoutInvoiceInput
  }

  export type invoicesUncheckedCreateInput = {
    id?: string
    date?: Date | string
    amount: number
    status: string
    items?: invoices_itemsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type invoicesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    items?: invoices_itemsUpdateManyWithoutInvoiceNestedInput
  }

  export type invoicesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    items?: invoices_itemsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type invoicesCreateManyInput = {
    id?: string
    date?: Date | string
    amount: number
    status: string
  }

  export type invoicesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type invoicesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
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

  export type Invoices_itemsListRelationFilter = {
    every?: invoices_itemsWhereInput
    some?: invoices_itemsWhereInput
    none?: invoices_itemsWhereInput
  }

  export type invoices_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    sold_count?: SortOrder
    createdAt?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    price?: SortOrder
    sold_count?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    sold_count?: SortOrder
    createdAt?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    sold_count?: SortOrder
    createdAt?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    price?: SortOrder
    sold_count?: SortOrder
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

  export type InvoicesScalarRelationFilter = {
    is?: invoicesWhereInput
    isNot?: invoicesWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type invoices_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type invoices_itemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    total?: SortOrder
  }

  export type invoices_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type invoices_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type invoices_itemsSumOrderByAggregateInput = {
    quantity?: SortOrder
    total?: SortOrder
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

  export type store_metricsCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    total_sales?: SortOrder
    new_customers?: SortOrder
    total_products?: SortOrder
    updatedAt?: SortOrder
  }

  export type store_metricsAvgOrderByAggregateInput = {
    rating?: SortOrder
    total_sales?: SortOrder
    new_customers?: SortOrder
    total_products?: SortOrder
  }

  export type store_metricsMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    total_sales?: SortOrder
    new_customers?: SortOrder
    total_products?: SortOrder
    updatedAt?: SortOrder
  }

  export type store_metricsMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    total_sales?: SortOrder
    new_customers?: SortOrder
    total_products?: SortOrder
    updatedAt?: SortOrder
  }

  export type store_metricsSumOrderByAggregateInput = {
    rating?: SortOrder
    total_sales?: SortOrder
    new_customers?: SortOrder
    total_products?: SortOrder
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

  export type invoicesCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type invoicesAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type invoicesMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type invoicesMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type invoicesSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type invoices_itemsCreateNestedManyWithoutProductInput = {
    create?: XOR<invoices_itemsCreateWithoutProductInput, invoices_itemsUncheckedCreateWithoutProductInput> | invoices_itemsCreateWithoutProductInput[] | invoices_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: invoices_itemsCreateOrConnectWithoutProductInput | invoices_itemsCreateOrConnectWithoutProductInput[]
    createMany?: invoices_itemsCreateManyProductInputEnvelope
    connect?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
  }

  export type invoices_itemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<invoices_itemsCreateWithoutProductInput, invoices_itemsUncheckedCreateWithoutProductInput> | invoices_itemsCreateWithoutProductInput[] | invoices_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: invoices_itemsCreateOrConnectWithoutProductInput | invoices_itemsCreateOrConnectWithoutProductInput[]
    createMany?: invoices_itemsCreateManyProductInputEnvelope
    connect?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type invoices_itemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<invoices_itemsCreateWithoutProductInput, invoices_itemsUncheckedCreateWithoutProductInput> | invoices_itemsCreateWithoutProductInput[] | invoices_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: invoices_itemsCreateOrConnectWithoutProductInput | invoices_itemsCreateOrConnectWithoutProductInput[]
    upsert?: invoices_itemsUpsertWithWhereUniqueWithoutProductInput | invoices_itemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: invoices_itemsCreateManyProductInputEnvelope
    set?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    disconnect?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    delete?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    connect?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    update?: invoices_itemsUpdateWithWhereUniqueWithoutProductInput | invoices_itemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: invoices_itemsUpdateManyWithWhereWithoutProductInput | invoices_itemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: invoices_itemsScalarWhereInput | invoices_itemsScalarWhereInput[]
  }

  export type invoices_itemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<invoices_itemsCreateWithoutProductInput, invoices_itemsUncheckedCreateWithoutProductInput> | invoices_itemsCreateWithoutProductInput[] | invoices_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: invoices_itemsCreateOrConnectWithoutProductInput | invoices_itemsCreateOrConnectWithoutProductInput[]
    upsert?: invoices_itemsUpsertWithWhereUniqueWithoutProductInput | invoices_itemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: invoices_itemsCreateManyProductInputEnvelope
    set?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    disconnect?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    delete?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    connect?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    update?: invoices_itemsUpdateWithWhereUniqueWithoutProductInput | invoices_itemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: invoices_itemsUpdateManyWithWhereWithoutProductInput | invoices_itemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: invoices_itemsScalarWhereInput | invoices_itemsScalarWhereInput[]
  }

  export type invoicesCreateNestedOneWithoutItemsInput = {
    create?: XOR<invoicesCreateWithoutItemsInput, invoicesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutItemsInput
    connect?: invoicesWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<productsCreateWithoutInvoicesInput, productsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: productsCreateOrConnectWithoutInvoicesInput
    connect?: productsWhereUniqueInput
  }

  export type invoicesUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<invoicesCreateWithoutItemsInput, invoicesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutItemsInput
    upsert?: invoicesUpsertWithoutItemsInput
    connect?: invoicesWhereUniqueInput
    update?: XOR<XOR<invoicesUpdateToOneWithWhereWithoutItemsInput, invoicesUpdateWithoutItemsInput>, invoicesUncheckedUpdateWithoutItemsInput>
  }

  export type productsUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<productsCreateWithoutInvoicesInput, productsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: productsCreateOrConnectWithoutInvoicesInput
    upsert?: productsUpsertWithoutInvoicesInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutInvoicesInput, productsUpdateWithoutInvoicesInput>, productsUncheckedUpdateWithoutInvoicesInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type invoices_itemsCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<invoices_itemsCreateWithoutInvoiceInput, invoices_itemsUncheckedCreateWithoutInvoiceInput> | invoices_itemsCreateWithoutInvoiceInput[] | invoices_itemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: invoices_itemsCreateOrConnectWithoutInvoiceInput | invoices_itemsCreateOrConnectWithoutInvoiceInput[]
    createMany?: invoices_itemsCreateManyInvoiceInputEnvelope
    connect?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
  }

  export type invoices_itemsUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<invoices_itemsCreateWithoutInvoiceInput, invoices_itemsUncheckedCreateWithoutInvoiceInput> | invoices_itemsCreateWithoutInvoiceInput[] | invoices_itemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: invoices_itemsCreateOrConnectWithoutInvoiceInput | invoices_itemsCreateOrConnectWithoutInvoiceInput[]
    createMany?: invoices_itemsCreateManyInvoiceInputEnvelope
    connect?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
  }

  export type invoices_itemsUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<invoices_itemsCreateWithoutInvoiceInput, invoices_itemsUncheckedCreateWithoutInvoiceInput> | invoices_itemsCreateWithoutInvoiceInput[] | invoices_itemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: invoices_itemsCreateOrConnectWithoutInvoiceInput | invoices_itemsCreateOrConnectWithoutInvoiceInput[]
    upsert?: invoices_itemsUpsertWithWhereUniqueWithoutInvoiceInput | invoices_itemsUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: invoices_itemsCreateManyInvoiceInputEnvelope
    set?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    disconnect?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    delete?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    connect?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    update?: invoices_itemsUpdateWithWhereUniqueWithoutInvoiceInput | invoices_itemsUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: invoices_itemsUpdateManyWithWhereWithoutInvoiceInput | invoices_itemsUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: invoices_itemsScalarWhereInput | invoices_itemsScalarWhereInput[]
  }

  export type invoices_itemsUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<invoices_itemsCreateWithoutInvoiceInput, invoices_itemsUncheckedCreateWithoutInvoiceInput> | invoices_itemsCreateWithoutInvoiceInput[] | invoices_itemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: invoices_itemsCreateOrConnectWithoutInvoiceInput | invoices_itemsCreateOrConnectWithoutInvoiceInput[]
    upsert?: invoices_itemsUpsertWithWhereUniqueWithoutInvoiceInput | invoices_itemsUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: invoices_itemsCreateManyInvoiceInputEnvelope
    set?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    disconnect?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    delete?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    connect?: invoices_itemsWhereUniqueInput | invoices_itemsWhereUniqueInput[]
    update?: invoices_itemsUpdateWithWhereUniqueWithoutInvoiceInput | invoices_itemsUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: invoices_itemsUpdateManyWithWhereWithoutInvoiceInput | invoices_itemsUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: invoices_itemsScalarWhereInput | invoices_itemsScalarWhereInput[]
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

  export type invoices_itemsCreateWithoutProductInput = {
    id?: string
    quantity: number
    total: number
    invoice: invoicesCreateNestedOneWithoutItemsInput
  }

  export type invoices_itemsUncheckedCreateWithoutProductInput = {
    id?: string
    invoice_id: string
    quantity: number
    total: number
  }

  export type invoices_itemsCreateOrConnectWithoutProductInput = {
    where: invoices_itemsWhereUniqueInput
    create: XOR<invoices_itemsCreateWithoutProductInput, invoices_itemsUncheckedCreateWithoutProductInput>
  }

  export type invoices_itemsCreateManyProductInputEnvelope = {
    data: invoices_itemsCreateManyProductInput | invoices_itemsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type invoices_itemsUpsertWithWhereUniqueWithoutProductInput = {
    where: invoices_itemsWhereUniqueInput
    update: XOR<invoices_itemsUpdateWithoutProductInput, invoices_itemsUncheckedUpdateWithoutProductInput>
    create: XOR<invoices_itemsCreateWithoutProductInput, invoices_itemsUncheckedCreateWithoutProductInput>
  }

  export type invoices_itemsUpdateWithWhereUniqueWithoutProductInput = {
    where: invoices_itemsWhereUniqueInput
    data: XOR<invoices_itemsUpdateWithoutProductInput, invoices_itemsUncheckedUpdateWithoutProductInput>
  }

  export type invoices_itemsUpdateManyWithWhereWithoutProductInput = {
    where: invoices_itemsScalarWhereInput
    data: XOR<invoices_itemsUpdateManyMutationInput, invoices_itemsUncheckedUpdateManyWithoutProductInput>
  }

  export type invoices_itemsScalarWhereInput = {
    AND?: invoices_itemsScalarWhereInput | invoices_itemsScalarWhereInput[]
    OR?: invoices_itemsScalarWhereInput[]
    NOT?: invoices_itemsScalarWhereInput | invoices_itemsScalarWhereInput[]
    id?: UuidFilter<"invoices_items"> | string
    invoice_id?: UuidFilter<"invoices_items"> | string
    product_id?: UuidFilter<"invoices_items"> | string
    quantity?: IntFilter<"invoices_items"> | number
    total?: IntFilter<"invoices_items"> | number
  }

  export type invoicesCreateWithoutItemsInput = {
    id?: string
    date?: Date | string
    amount: number
    status: string
  }

  export type invoicesUncheckedCreateWithoutItemsInput = {
    id?: string
    date?: Date | string
    amount: number
    status: string
  }

  export type invoicesCreateOrConnectWithoutItemsInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutItemsInput, invoicesUncheckedCreateWithoutItemsInput>
  }

  export type productsCreateWithoutInvoicesInput = {
    id?: string
    name: string
    price: number
    image_url: string
    sold_count?: number
    createdAt?: Date | string
  }

  export type productsUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    price: number
    image_url: string
    sold_count?: number
    createdAt?: Date | string
  }

  export type productsCreateOrConnectWithoutInvoicesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutInvoicesInput, productsUncheckedCreateWithoutInvoicesInput>
  }

  export type invoicesUpsertWithoutItemsInput = {
    update: XOR<invoicesUpdateWithoutItemsInput, invoicesUncheckedUpdateWithoutItemsInput>
    create: XOR<invoicesCreateWithoutItemsInput, invoicesUncheckedCreateWithoutItemsInput>
    where?: invoicesWhereInput
  }

  export type invoicesUpdateToOneWithWhereWithoutItemsInput = {
    where?: invoicesWhereInput
    data: XOR<invoicesUpdateWithoutItemsInput, invoicesUncheckedUpdateWithoutItemsInput>
  }

  export type invoicesUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type invoicesUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type productsUpsertWithoutInvoicesInput = {
    update: XOR<productsUpdateWithoutInvoicesInput, productsUncheckedUpdateWithoutInvoicesInput>
    create: XOR<productsCreateWithoutInvoicesInput, productsUncheckedCreateWithoutInvoicesInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutInvoicesInput, productsUncheckedUpdateWithoutInvoicesInput>
  }

  export type productsUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    sold_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    sold_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoices_itemsCreateWithoutInvoiceInput = {
    id?: string
    quantity: number
    total: number
    product: productsCreateNestedOneWithoutInvoicesInput
  }

  export type invoices_itemsUncheckedCreateWithoutInvoiceInput = {
    id?: string
    product_id: string
    quantity: number
    total: number
  }

  export type invoices_itemsCreateOrConnectWithoutInvoiceInput = {
    where: invoices_itemsWhereUniqueInput
    create: XOR<invoices_itemsCreateWithoutInvoiceInput, invoices_itemsUncheckedCreateWithoutInvoiceInput>
  }

  export type invoices_itemsCreateManyInvoiceInputEnvelope = {
    data: invoices_itemsCreateManyInvoiceInput | invoices_itemsCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type invoices_itemsUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: invoices_itemsWhereUniqueInput
    update: XOR<invoices_itemsUpdateWithoutInvoiceInput, invoices_itemsUncheckedUpdateWithoutInvoiceInput>
    create: XOR<invoices_itemsCreateWithoutInvoiceInput, invoices_itemsUncheckedCreateWithoutInvoiceInput>
  }

  export type invoices_itemsUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: invoices_itemsWhereUniqueInput
    data: XOR<invoices_itemsUpdateWithoutInvoiceInput, invoices_itemsUncheckedUpdateWithoutInvoiceInput>
  }

  export type invoices_itemsUpdateManyWithWhereWithoutInvoiceInput = {
    where: invoices_itemsScalarWhereInput
    data: XOR<invoices_itemsUpdateManyMutationInput, invoices_itemsUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type invoices_itemsCreateManyProductInput = {
    id?: string
    invoice_id: string
    quantity: number
    total: number
  }

  export type invoices_itemsUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    invoice?: invoicesUpdateOneRequiredWithoutItemsNestedInput
  }

  export type invoices_itemsUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type invoices_itemsUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type invoices_itemsCreateManyInvoiceInput = {
    id?: string
    product_id: string
    quantity: number
    total: number
  }

  export type invoices_itemsUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    product?: productsUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type invoices_itemsUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type invoices_itemsUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
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