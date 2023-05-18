import { __, sprintf } from '@wordpress/i18n';

import {
	__experimentalInputControl as InputControl,
	Button,
	ExternalLink,
	Placeholder
} from '@wordpress/components';
import { useEffect, RawHTML, useState, createInterpolateElement } from '@wordpress/element';
import {
	useBlockProps,
} from '@wordpress/block-editor';
import './editor.scss';
import Holder from './holder';
import ApiButton from './api-button';

export default function Edit( props ) {
	const { attributes, setAttributes, clientId } = props;
	const { blockId, apiKey, anchor } = attributes;

	useEffect( () => {
		setAttributes( { apiKey: pdf_embed.apiKey } );

		const idx = clientId
			.substr( 2, 9 )
			.replace( '-', '' )
			.replace( /-/g, '' );

		if ( ! blockId ) {
			setAttributes( { blockId: idx } );
		}

		if ( ! anchor ) {
			setAttributes( { anchor: idx } );
		}
	}, [] );

	const blockProps = useBlockProps();

	if ( apiKey ) {
		return <Holder { ...props } />;
	}

	return (
		<div { ...blockProps }>
			<Placeholder
				icon={ 'pdf' }
				instructions={
					<RawHTML>
						{ sprintf(
							__(
								'<p>Please insert a <b>free api Key</b> here or in the settings panel on the right. Get your free API key on %s.</p>',
								'pdf-embed'
							),
							`<a href="https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html" target="_blank">Adobe  Official site</a>`
						) }
					</RawHTML>
				}
				label={ __( 'PDF Embed', 'pdf-embed' ) }
			>
				<ApiButton { ...props } />
			</Placeholder>
		</div>
	);
}
