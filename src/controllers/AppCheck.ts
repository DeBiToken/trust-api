import { Request, Response } from "express";
import { sendJSONresponse } from "../common/Utils";

export class AppCheck {
    public android(req: Request, res: Response) {
        const version = "1.5.131"
        const build = 254
        sendJSONresponse(res, 200, {
            "latestVersion": version,
            "latestVersionCode": build,
            "url": "https://s3-us-east-2.amazonaws.com/trustandroidapk/builds/latest_release.apk",
            "releaseNotes": [
                    "- Improved token UI - clicking on token shows transactions for that token",
                    "- Amount validation",
                    "- Descriptions on import fields",
                    "- Show identicon in wallet list",
                    "- Fixes: collectible still being show after transfer"
            ],
            "title": "Update Available",
            "description": "A new version of Trust Wallet is available. Please update to version " + version,
            "force": false
            }
        )
    }

    public ios(req: Request, res: Response) {
        const version = "1.91.0"
        const build = 278
        sendJSONresponse(res, 200, {
            "latestVersion": version,
            "latestVersionCode": build,
            "url": "https://itunes.apple.com/us/app/trust-ethereum-wallet/id1288339409?mt=8",
            "title": "Update Available",
            "description": "A new version of Trust Wallet is available. Please update to version " + version,
            "force": false
            },
        )
    }
}
