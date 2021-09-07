export default function DisableSubscription(isProduction: boolean, subscriptionId: string, token: string): Promise<{
    status_message: string;
} | undefined>;
