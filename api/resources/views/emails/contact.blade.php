<x-mail::message>
# RN Resume Contact Request

New message from {{ $contactData['name'] }} ({{ $contactData['email'] }}).

{{ $contactData['desc'] }}

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
