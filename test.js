import test from 'ava';
import PublishSubscribe from './src/PublishSubscribe';

const DEFAULT_KEY = 1;

test.beforeEach(t => {
	PublishSubscribe.key = DEFAULT_KEY;
	PublishSubscribe.unsubscribeAll();
});

test('by default key should be 1', t => {
	t.is(PublishSubscribe.key, DEFAULT_KEY);
});

test('subscribe and publish to the TOPIC', t => {
	const callback = (data) => {
		t.deepEqual(data, { message: 'Hello World!' });
	};

	PublishSubscribe.subscribe('TOPIC', callback);
	t.is(PublishSubscribe.key, 2);

	PublishSubscribe.publish('TOPIC', { message: 'Hello World!' });
});

test('unsubscribe TOPIC', t => {
	PublishSubscribe.subscribe('TOPIC', function () { });
	PublishSubscribe.unsubscribe('TOPIC');
	t.is(PublishSubscribe.key, 2);
	t.deepEqual(PublishSubscribe.subscribers, {});
});

test('unsubscribeAll TOPICS', t => {
	PublishSubscribe.subscribe('TOPIC', function () { });
	PublishSubscribe.subscribe('TOPIC', function () { });
	t.is(PublishSubscribe.key, 3);

	PublishSubscribe.unsubscribeAll();
	t.deepEqual(PublishSubscribe.subscribers, {});
	t.is(PublishSubscribe.key, DEFAULT_KEY);
});
