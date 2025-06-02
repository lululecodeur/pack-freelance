
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
 * Model Freelance
 * 
 */
export type Freelance = $Result.DefaultSelection<Prisma.$FreelancePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Freelances
 * const freelances = await prisma.freelance.findMany()
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
   * // Fetch zero or more Freelances
   * const freelances = await prisma.freelance.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.freelance`: Exposes CRUD operations for the **Freelance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Freelances
    * const freelances = await prisma.freelance.findMany()
    * ```
    */
  get freelance(): Prisma.FreelanceDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Freelance: 'Freelance'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "freelance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Freelance: {
        payload: Prisma.$FreelancePayload<ExtArgs>
        fields: Prisma.FreelanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FreelanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FreelanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancePayload>
          }
          findFirst: {
            args: Prisma.FreelanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FreelanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancePayload>
          }
          findMany: {
            args: Prisma.FreelanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancePayload>[]
          }
          create: {
            args: Prisma.FreelanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancePayload>
          }
          createMany: {
            args: Prisma.FreelanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FreelanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancePayload>[]
          }
          delete: {
            args: Prisma.FreelanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancePayload>
          }
          update: {
            args: Prisma.FreelanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancePayload>
          }
          deleteMany: {
            args: Prisma.FreelanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FreelanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FreelanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancePayload>
          }
          aggregate: {
            args: Prisma.FreelanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFreelance>
          }
          groupBy: {
            args: Prisma.FreelanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<FreelanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.FreelanceCountArgs<ExtArgs>
            result: $Utils.Optional<FreelanceCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model Freelance
   */

  export type AggregateFreelance = {
    _count: FreelanceCountAggregateOutputType | null
    _avg: FreelanceAvgAggregateOutputType | null
    _sum: FreelanceSumAggregateOutputType | null
    _min: FreelanceMinAggregateOutputType | null
    _max: FreelanceMaxAggregateOutputType | null
  }

  export type FreelanceAvgAggregateOutputType = {
    id: number | null
    objectifMensuel: number | null
    joursParMois: number | null
    tjmCalcule: number | null
  }

  export type FreelanceSumAggregateOutputType = {
    id: number | null
    objectifMensuel: number | null
    joursParMois: number | null
    tjmCalcule: number | null
  }

  export type FreelanceMinAggregateOutputType = {
    id: number | null
    email: string | null
    objectifMensuel: number | null
    joursParMois: number | null
    tjmCalcule: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FreelanceMaxAggregateOutputType = {
    id: number | null
    email: string | null
    objectifMensuel: number | null
    joursParMois: number | null
    tjmCalcule: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FreelanceCountAggregateOutputType = {
    id: number
    email: number
    objectifMensuel: number
    joursParMois: number
    tjmCalcule: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FreelanceAvgAggregateInputType = {
    id?: true
    objectifMensuel?: true
    joursParMois?: true
    tjmCalcule?: true
  }

  export type FreelanceSumAggregateInputType = {
    id?: true
    objectifMensuel?: true
    joursParMois?: true
    tjmCalcule?: true
  }

  export type FreelanceMinAggregateInputType = {
    id?: true
    email?: true
    objectifMensuel?: true
    joursParMois?: true
    tjmCalcule?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FreelanceMaxAggregateInputType = {
    id?: true
    email?: true
    objectifMensuel?: true
    joursParMois?: true
    tjmCalcule?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FreelanceCountAggregateInputType = {
    id?: true
    email?: true
    objectifMensuel?: true
    joursParMois?: true
    tjmCalcule?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FreelanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Freelance to aggregate.
     */
    where?: FreelanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Freelances to fetch.
     */
    orderBy?: FreelanceOrderByWithRelationInput | FreelanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FreelanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Freelances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Freelances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Freelances
    **/
    _count?: true | FreelanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FreelanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FreelanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FreelanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FreelanceMaxAggregateInputType
  }

  export type GetFreelanceAggregateType<T extends FreelanceAggregateArgs> = {
        [P in keyof T & keyof AggregateFreelance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFreelance[P]>
      : GetScalarType<T[P], AggregateFreelance[P]>
  }




  export type FreelanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FreelanceWhereInput
    orderBy?: FreelanceOrderByWithAggregationInput | FreelanceOrderByWithAggregationInput[]
    by: FreelanceScalarFieldEnum[] | FreelanceScalarFieldEnum
    having?: FreelanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FreelanceCountAggregateInputType | true
    _avg?: FreelanceAvgAggregateInputType
    _sum?: FreelanceSumAggregateInputType
    _min?: FreelanceMinAggregateInputType
    _max?: FreelanceMaxAggregateInputType
  }

  export type FreelanceGroupByOutputType = {
    id: number
    email: string
    objectifMensuel: number
    joursParMois: number
    tjmCalcule: number
    createdAt: Date
    updatedAt: Date
    _count: FreelanceCountAggregateOutputType | null
    _avg: FreelanceAvgAggregateOutputType | null
    _sum: FreelanceSumAggregateOutputType | null
    _min: FreelanceMinAggregateOutputType | null
    _max: FreelanceMaxAggregateOutputType | null
  }

  type GetFreelanceGroupByPayload<T extends FreelanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FreelanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FreelanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FreelanceGroupByOutputType[P]>
            : GetScalarType<T[P], FreelanceGroupByOutputType[P]>
        }
      >
    >


  export type FreelanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    objectifMensuel?: boolean
    joursParMois?: boolean
    tjmCalcule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["freelance"]>

  export type FreelanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    objectifMensuel?: boolean
    joursParMois?: boolean
    tjmCalcule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["freelance"]>

  export type FreelanceSelectScalar = {
    id?: boolean
    email?: boolean
    objectifMensuel?: boolean
    joursParMois?: boolean
    tjmCalcule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $FreelancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Freelance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      objectifMensuel: number
      joursParMois: number
      tjmCalcule: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["freelance"]>
    composites: {}
  }

  type FreelanceGetPayload<S extends boolean | null | undefined | FreelanceDefaultArgs> = $Result.GetResult<Prisma.$FreelancePayload, S>

  type FreelanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FreelanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FreelanceCountAggregateInputType | true
    }

  export interface FreelanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Freelance'], meta: { name: 'Freelance' } }
    /**
     * Find zero or one Freelance that matches the filter.
     * @param {FreelanceFindUniqueArgs} args - Arguments to find a Freelance
     * @example
     * // Get one Freelance
     * const freelance = await prisma.freelance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FreelanceFindUniqueArgs>(args: SelectSubset<T, FreelanceFindUniqueArgs<ExtArgs>>): Prisma__FreelanceClient<$Result.GetResult<Prisma.$FreelancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Freelance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FreelanceFindUniqueOrThrowArgs} args - Arguments to find a Freelance
     * @example
     * // Get one Freelance
     * const freelance = await prisma.freelance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FreelanceFindUniqueOrThrowArgs>(args: SelectSubset<T, FreelanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FreelanceClient<$Result.GetResult<Prisma.$FreelancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Freelance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelanceFindFirstArgs} args - Arguments to find a Freelance
     * @example
     * // Get one Freelance
     * const freelance = await prisma.freelance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FreelanceFindFirstArgs>(args?: SelectSubset<T, FreelanceFindFirstArgs<ExtArgs>>): Prisma__FreelanceClient<$Result.GetResult<Prisma.$FreelancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Freelance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelanceFindFirstOrThrowArgs} args - Arguments to find a Freelance
     * @example
     * // Get one Freelance
     * const freelance = await prisma.freelance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FreelanceFindFirstOrThrowArgs>(args?: SelectSubset<T, FreelanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__FreelanceClient<$Result.GetResult<Prisma.$FreelancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Freelances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Freelances
     * const freelances = await prisma.freelance.findMany()
     * 
     * // Get first 10 Freelances
     * const freelances = await prisma.freelance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const freelanceWithIdOnly = await prisma.freelance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FreelanceFindManyArgs>(args?: SelectSubset<T, FreelanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreelancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Freelance.
     * @param {FreelanceCreateArgs} args - Arguments to create a Freelance.
     * @example
     * // Create one Freelance
     * const Freelance = await prisma.freelance.create({
     *   data: {
     *     // ... data to create a Freelance
     *   }
     * })
     * 
     */
    create<T extends FreelanceCreateArgs>(args: SelectSubset<T, FreelanceCreateArgs<ExtArgs>>): Prisma__FreelanceClient<$Result.GetResult<Prisma.$FreelancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Freelances.
     * @param {FreelanceCreateManyArgs} args - Arguments to create many Freelances.
     * @example
     * // Create many Freelances
     * const freelance = await prisma.freelance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FreelanceCreateManyArgs>(args?: SelectSubset<T, FreelanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Freelances and returns the data saved in the database.
     * @param {FreelanceCreateManyAndReturnArgs} args - Arguments to create many Freelances.
     * @example
     * // Create many Freelances
     * const freelance = await prisma.freelance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Freelances and only return the `id`
     * const freelanceWithIdOnly = await prisma.freelance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FreelanceCreateManyAndReturnArgs>(args?: SelectSubset<T, FreelanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreelancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Freelance.
     * @param {FreelanceDeleteArgs} args - Arguments to delete one Freelance.
     * @example
     * // Delete one Freelance
     * const Freelance = await prisma.freelance.delete({
     *   where: {
     *     // ... filter to delete one Freelance
     *   }
     * })
     * 
     */
    delete<T extends FreelanceDeleteArgs>(args: SelectSubset<T, FreelanceDeleteArgs<ExtArgs>>): Prisma__FreelanceClient<$Result.GetResult<Prisma.$FreelancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Freelance.
     * @param {FreelanceUpdateArgs} args - Arguments to update one Freelance.
     * @example
     * // Update one Freelance
     * const freelance = await prisma.freelance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FreelanceUpdateArgs>(args: SelectSubset<T, FreelanceUpdateArgs<ExtArgs>>): Prisma__FreelanceClient<$Result.GetResult<Prisma.$FreelancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Freelances.
     * @param {FreelanceDeleteManyArgs} args - Arguments to filter Freelances to delete.
     * @example
     * // Delete a few Freelances
     * const { count } = await prisma.freelance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FreelanceDeleteManyArgs>(args?: SelectSubset<T, FreelanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Freelances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Freelances
     * const freelance = await prisma.freelance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FreelanceUpdateManyArgs>(args: SelectSubset<T, FreelanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Freelance.
     * @param {FreelanceUpsertArgs} args - Arguments to update or create a Freelance.
     * @example
     * // Update or create a Freelance
     * const freelance = await prisma.freelance.upsert({
     *   create: {
     *     // ... data to create a Freelance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Freelance we want to update
     *   }
     * })
     */
    upsert<T extends FreelanceUpsertArgs>(args: SelectSubset<T, FreelanceUpsertArgs<ExtArgs>>): Prisma__FreelanceClient<$Result.GetResult<Prisma.$FreelancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Freelances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelanceCountArgs} args - Arguments to filter Freelances to count.
     * @example
     * // Count the number of Freelances
     * const count = await prisma.freelance.count({
     *   where: {
     *     // ... the filter for the Freelances we want to count
     *   }
     * })
    **/
    count<T extends FreelanceCountArgs>(
      args?: Subset<T, FreelanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FreelanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Freelance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FreelanceAggregateArgs>(args: Subset<T, FreelanceAggregateArgs>): Prisma.PrismaPromise<GetFreelanceAggregateType<T>>

    /**
     * Group by Freelance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelanceGroupByArgs} args - Group by arguments.
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
      T extends FreelanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FreelanceGroupByArgs['orderBy'] }
        : { orderBy?: FreelanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FreelanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFreelanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Freelance model
   */
  readonly fields: FreelanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Freelance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FreelanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Freelance model
   */ 
  interface FreelanceFieldRefs {
    readonly id: FieldRef<"Freelance", 'Int'>
    readonly email: FieldRef<"Freelance", 'String'>
    readonly objectifMensuel: FieldRef<"Freelance", 'Int'>
    readonly joursParMois: FieldRef<"Freelance", 'Int'>
    readonly tjmCalcule: FieldRef<"Freelance", 'Int'>
    readonly createdAt: FieldRef<"Freelance", 'DateTime'>
    readonly updatedAt: FieldRef<"Freelance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Freelance findUnique
   */
  export type FreelanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freelance
     */
    select?: FreelanceSelect<ExtArgs> | null
    /**
     * Filter, which Freelance to fetch.
     */
    where: FreelanceWhereUniqueInput
  }

  /**
   * Freelance findUniqueOrThrow
   */
  export type FreelanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freelance
     */
    select?: FreelanceSelect<ExtArgs> | null
    /**
     * Filter, which Freelance to fetch.
     */
    where: FreelanceWhereUniqueInput
  }

  /**
   * Freelance findFirst
   */
  export type FreelanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freelance
     */
    select?: FreelanceSelect<ExtArgs> | null
    /**
     * Filter, which Freelance to fetch.
     */
    where?: FreelanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Freelances to fetch.
     */
    orderBy?: FreelanceOrderByWithRelationInput | FreelanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Freelances.
     */
    cursor?: FreelanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Freelances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Freelances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Freelances.
     */
    distinct?: FreelanceScalarFieldEnum | FreelanceScalarFieldEnum[]
  }

  /**
   * Freelance findFirstOrThrow
   */
  export type FreelanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freelance
     */
    select?: FreelanceSelect<ExtArgs> | null
    /**
     * Filter, which Freelance to fetch.
     */
    where?: FreelanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Freelances to fetch.
     */
    orderBy?: FreelanceOrderByWithRelationInput | FreelanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Freelances.
     */
    cursor?: FreelanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Freelances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Freelances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Freelances.
     */
    distinct?: FreelanceScalarFieldEnum | FreelanceScalarFieldEnum[]
  }

  /**
   * Freelance findMany
   */
  export type FreelanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freelance
     */
    select?: FreelanceSelect<ExtArgs> | null
    /**
     * Filter, which Freelances to fetch.
     */
    where?: FreelanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Freelances to fetch.
     */
    orderBy?: FreelanceOrderByWithRelationInput | FreelanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Freelances.
     */
    cursor?: FreelanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Freelances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Freelances.
     */
    skip?: number
    distinct?: FreelanceScalarFieldEnum | FreelanceScalarFieldEnum[]
  }

  /**
   * Freelance create
   */
  export type FreelanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freelance
     */
    select?: FreelanceSelect<ExtArgs> | null
    /**
     * The data needed to create a Freelance.
     */
    data: XOR<FreelanceCreateInput, FreelanceUncheckedCreateInput>
  }

  /**
   * Freelance createMany
   */
  export type FreelanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Freelances.
     */
    data: FreelanceCreateManyInput | FreelanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Freelance createManyAndReturn
   */
  export type FreelanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freelance
     */
    select?: FreelanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Freelances.
     */
    data: FreelanceCreateManyInput | FreelanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Freelance update
   */
  export type FreelanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freelance
     */
    select?: FreelanceSelect<ExtArgs> | null
    /**
     * The data needed to update a Freelance.
     */
    data: XOR<FreelanceUpdateInput, FreelanceUncheckedUpdateInput>
    /**
     * Choose, which Freelance to update.
     */
    where: FreelanceWhereUniqueInput
  }

  /**
   * Freelance updateMany
   */
  export type FreelanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Freelances.
     */
    data: XOR<FreelanceUpdateManyMutationInput, FreelanceUncheckedUpdateManyInput>
    /**
     * Filter which Freelances to update
     */
    where?: FreelanceWhereInput
  }

  /**
   * Freelance upsert
   */
  export type FreelanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freelance
     */
    select?: FreelanceSelect<ExtArgs> | null
    /**
     * The filter to search for the Freelance to update in case it exists.
     */
    where: FreelanceWhereUniqueInput
    /**
     * In case the Freelance found by the `where` argument doesn't exist, create a new Freelance with this data.
     */
    create: XOR<FreelanceCreateInput, FreelanceUncheckedCreateInput>
    /**
     * In case the Freelance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FreelanceUpdateInput, FreelanceUncheckedUpdateInput>
  }

  /**
   * Freelance delete
   */
  export type FreelanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freelance
     */
    select?: FreelanceSelect<ExtArgs> | null
    /**
     * Filter which Freelance to delete.
     */
    where: FreelanceWhereUniqueInput
  }

  /**
   * Freelance deleteMany
   */
  export type FreelanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Freelances to delete
     */
    where?: FreelanceWhereInput
  }

  /**
   * Freelance without action
   */
  export type FreelanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Freelance
     */
    select?: FreelanceSelect<ExtArgs> | null
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


  export const FreelanceScalarFieldEnum: {
    id: 'id',
    email: 'email',
    objectifMensuel: 'objectifMensuel',
    joursParMois: 'joursParMois',
    tjmCalcule: 'tjmCalcule',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FreelanceScalarFieldEnum = (typeof FreelanceScalarFieldEnum)[keyof typeof FreelanceScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type FreelanceWhereInput = {
    AND?: FreelanceWhereInput | FreelanceWhereInput[]
    OR?: FreelanceWhereInput[]
    NOT?: FreelanceWhereInput | FreelanceWhereInput[]
    id?: IntFilter<"Freelance"> | number
    email?: StringFilter<"Freelance"> | string
    objectifMensuel?: IntFilter<"Freelance"> | number
    joursParMois?: IntFilter<"Freelance"> | number
    tjmCalcule?: IntFilter<"Freelance"> | number
    createdAt?: DateTimeFilter<"Freelance"> | Date | string
    updatedAt?: DateTimeFilter<"Freelance"> | Date | string
  }

  export type FreelanceOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    objectifMensuel?: SortOrder
    joursParMois?: SortOrder
    tjmCalcule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FreelanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: FreelanceWhereInput | FreelanceWhereInput[]
    OR?: FreelanceWhereInput[]
    NOT?: FreelanceWhereInput | FreelanceWhereInput[]
    objectifMensuel?: IntFilter<"Freelance"> | number
    joursParMois?: IntFilter<"Freelance"> | number
    tjmCalcule?: IntFilter<"Freelance"> | number
    createdAt?: DateTimeFilter<"Freelance"> | Date | string
    updatedAt?: DateTimeFilter<"Freelance"> | Date | string
  }, "id" | "email">

  export type FreelanceOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    objectifMensuel?: SortOrder
    joursParMois?: SortOrder
    tjmCalcule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FreelanceCountOrderByAggregateInput
    _avg?: FreelanceAvgOrderByAggregateInput
    _max?: FreelanceMaxOrderByAggregateInput
    _min?: FreelanceMinOrderByAggregateInput
    _sum?: FreelanceSumOrderByAggregateInput
  }

  export type FreelanceScalarWhereWithAggregatesInput = {
    AND?: FreelanceScalarWhereWithAggregatesInput | FreelanceScalarWhereWithAggregatesInput[]
    OR?: FreelanceScalarWhereWithAggregatesInput[]
    NOT?: FreelanceScalarWhereWithAggregatesInput | FreelanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Freelance"> | number
    email?: StringWithAggregatesFilter<"Freelance"> | string
    objectifMensuel?: IntWithAggregatesFilter<"Freelance"> | number
    joursParMois?: IntWithAggregatesFilter<"Freelance"> | number
    tjmCalcule?: IntWithAggregatesFilter<"Freelance"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Freelance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Freelance"> | Date | string
  }

  export type FreelanceCreateInput = {
    email: string
    objectifMensuel: number
    joursParMois: number
    tjmCalcule: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FreelanceUncheckedCreateInput = {
    id?: number
    email: string
    objectifMensuel: number
    joursParMois: number
    tjmCalcule: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FreelanceUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    objectifMensuel?: IntFieldUpdateOperationsInput | number
    joursParMois?: IntFieldUpdateOperationsInput | number
    tjmCalcule?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreelanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    objectifMensuel?: IntFieldUpdateOperationsInput | number
    joursParMois?: IntFieldUpdateOperationsInput | number
    tjmCalcule?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreelanceCreateManyInput = {
    id?: number
    email: string
    objectifMensuel: number
    joursParMois: number
    tjmCalcule: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FreelanceUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    objectifMensuel?: IntFieldUpdateOperationsInput | number
    joursParMois?: IntFieldUpdateOperationsInput | number
    tjmCalcule?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreelanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    objectifMensuel?: IntFieldUpdateOperationsInput | number
    joursParMois?: IntFieldUpdateOperationsInput | number
    tjmCalcule?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FreelanceCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    objectifMensuel?: SortOrder
    joursParMois?: SortOrder
    tjmCalcule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FreelanceAvgOrderByAggregateInput = {
    id?: SortOrder
    objectifMensuel?: SortOrder
    joursParMois?: SortOrder
    tjmCalcule?: SortOrder
  }

  export type FreelanceMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    objectifMensuel?: SortOrder
    joursParMois?: SortOrder
    tjmCalcule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FreelanceMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    objectifMensuel?: SortOrder
    joursParMois?: SortOrder
    tjmCalcule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FreelanceSumOrderByAggregateInput = {
    id?: SortOrder
    objectifMensuel?: SortOrder
    joursParMois?: SortOrder
    tjmCalcule?: SortOrder
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FreelanceDefaultArgs instead
     */
    export type FreelanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FreelanceDefaultArgs<ExtArgs>

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