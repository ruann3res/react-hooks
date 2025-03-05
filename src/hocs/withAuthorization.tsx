import React from "react";

export function withAuthorization(Component: React.ComponentType<any>, allowedRoles: string[]) {
    return class extends React.Component<any> {
        render(): React.ReactNode {
            if (!allowedRoles.includes(this.props.userRole)) {
                return (
                    <h1 className="font-bold">
                        Forbidden
                    </h1>
                )
            }
            return <Component {...this.props} />
        }
    }
}