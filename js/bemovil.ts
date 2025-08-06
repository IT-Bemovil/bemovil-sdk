import fetch from "node-fetch";

export class Bemovil {
  private token: string;
  private baseUrl: string = "https://api.bemovil.com/api/v1";

  constructor(token: string, sandbox: boolean = false) {
    this.token = token;
    if (sandbox) {
      this.baseUrl = "https://apiv2.sandbox.bemovil.net/api/v1";
    }
  }

  private fetch(path: string, body: any = {}, options: any = {}) {
    let f = fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({
        data: body.data,
        _channel: "ws",
      }),
      ...options,
    });
    return f.then((res) => res.json());
  }

  public listProducts(search = "") {
    return this.fetch("/products", {
      data: {
        search,
      },
    });
  }

  public getProduct(productId: string) {
    return this.fetch(`/products/get`, {
      data: {
        productId,
      },
    });
  }

  public async getBalance() {
    let result = await this.fetch(`/business/get`);
    return result.data.balance;
  }

  public transactionFind(transactionId: any) {
    return this.fetch(`/transactions/get`, {
      data: {
        transactionId,
      },
    });
  }

  public transactionQuery(payload: any) {
    return this.fetch(`/transactions/query`, {
      data: payload,
    });
  }

  public sell(payload: any) {
    return this.fetch(`/transactions/sell`, {
      data: payload,
    });
  }
}
