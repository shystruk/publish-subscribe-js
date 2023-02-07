const PublishSubscribe: {
	subscribe: (topic: string, subscriber: object) => {}
	publish: (topic: string, data?: any) => {}
	unsubscribe: (topic: string, key?: number) => {}
	unsubscribeAll: () => {}
};

export default PublishSubscribe;
