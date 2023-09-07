import Link from "next/link";
import {routes} from "~/modules/routes";

export default function AllRouteLink() {
    return <div className="flex gap-2 flex-wrap mb-2 items-center">
        Link to Other page
        {Object.keys(routes).map((route) => <Link key={route} href={route}
                                                  className="bg-amber-300 px-2 py-1 rounded">{routes[route].name}</Link>)}
    </div>
}