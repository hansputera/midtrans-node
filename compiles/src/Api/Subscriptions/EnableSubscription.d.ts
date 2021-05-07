export default function EnableSubscription(isProduction: boolean, subscriptionId: string, token: string): Promise<{
    status_message: string;
} | undefined>;
