<x-mail::message>
# Laravel Contact Request App

New message from {{ $contactData['name'] }} ({{ $contactData['email'] }}).

{{ $contactData['desc'] }}

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
