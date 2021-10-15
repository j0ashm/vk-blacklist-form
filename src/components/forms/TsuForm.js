import React, {useState} from 'react'

import {
    FormControl,
    FormLabel,
    useToast
} from "@chakra-ui/react"
import { Input } from '@chakra-ui/input'
import { Box, Flex, Stack } from '@chakra-ui/layout'
import { Radio, RadioGroup } from '@chakra-ui/radio'
import { Button } from '@chakra-ui/button'

import axios from 'axios'

function TsuForm() {
    const [formValues, setFormValues] = useState({});
    const successToast = useToast();

    function onInputChange(e) {
        const { name, value } = e.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        const { submitterUsername, toBLUsername, profileLink, discordID, reason, division, duration, status } = formValues 

        axios.post(`${process.env.REACT_APP_POST_URL}/tsu`, {
            submitterUsername: `${submitterUsername}`,
            toBLUsername: `${toBLUsername}`,
            profileLink: `${profileLink}`,
            discordID: `${discordID}`,
            blReason: `${reason}`,
            division: `${division}`,
            duration: `${duration}`,
            status: `${status}`
        })
        .then(res => {
            console.log(res)
            successToast({
                title: `TSU Blacklist Submitted!`,
                description: `Your blacklist request has been submitted for user: ${formValues.toBLUsername}!`,
                status: 'success',
                duration: 10000,
                isClosable: false
            });
        })
    }

    return (
        <form action="submit" onSubmit={handleSubmit} autoComplete="off">
            <FormControl isRequired>
                <Flex mt="5">
                    <Box mr="2">
                        <FormLabel>Submitter's Username</FormLabel>
                        <Input name="submitterUsername" type="text" placeholder="Your username" defaultValue={formValues.submitterUsername} onChange={onInputChange}/>
                    </Box>

                    <Box ml="2">
                        <FormLabel>User to Blacklist</FormLabel>
                        <Input name="toBLUsername" type="text" placeholder="Who to blacklist" defaultValue={formValues.toBLUsername} onChange={onInputChange}/>
                    </Box>
                </Flex>

                <Flex mt="5">
                    <Box mr="2">
                        <FormLabel>Profile Link</FormLabel>
                        <Input name="profileLink" type="url" placeholder="Link to profile" defaultValue={formValues.profileLink} onChange={onInputChange}/>
                    </Box>

                    <Box ml="2">
                        <FormLabel>Discord ID</FormLabel>
                        <Input name="discordID" type="text" placeholder="Eg. 198239279741140992" defaultValue={formValues.discordID} onChange={onInputChange}/>
                    </Box>
                </Flex>

                <Box mt="5">
                    <FormLabel>Reason for Blacklist</FormLabel>
                    <Input name="reason" type="text" placeholder="bro why blacklist?" defaultValue={formValues.blReason} onChange={onInputChange}/>
                </Box>

                <Box mt="5">
                    <FormLabel>Division</FormLabel>
                    <RadioGroup name="division">
                        <Stack spacing="5px">
                        <Radio value="Universal" onChange={onInputChange}>Universal</Radio>
                        <Radio value="KGB" onChange={onInputChange}>KGB</Radio>
                        <Radio value="RG" onChange={onInputChange}>RG</Radio>
                        <Radio value="CRU" onChange={onInputChange}>CRU</Radio>
                        <Radio value="TFOC" onChange={onInputChange}>TFOC</Radio>
                        <Radio value="109th" onChange={onInputChange}>109th</Radio>
                        <Radio value="5th" onChange={onInputChange}>5th</Radio>
                        <Radio value="Spetsnaz" onChange={onInputChange}>Spetsnaz</Radio>
                        <Radio value="OMON" onChange={onInputChange}>OMON</Radio>
                        <Radio value="Senior Politburo" onChange={onInputChange}>Senior Politburo</Radio>
                        <Radio value="MoD" onChange={onInputChange}>MoD</Radio>
                        <Radio value="TSM" onChange={onInputChange}>TSM</Radio>
                        <Radio value="Biopreparat" onChange={onInputChange}>Biopreparat</Radio>
                        <Radio value="Militsiya Corps" onChange={onInputChange}>Militsiya Corps</Radio>
                        <Radio value="Army Corps" onChange={onInputChange}>Army Corps</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>

                <Box mt="5">
                    <FormLabel>Duration of Blacklist</FormLabel>
                    <RadioGroup name="duration">
                        <Stack spacing="5px">
                        <Radio value="1 week" onChange={onInputChange}>1 week</Radio>
                        <Radio value="2 weeks" onChange={onInputChange}>2 weeks</Radio>
                        <Radio value="1 month" onChange={onInputChange}>1 month</Radio>
                        <Radio value="3 months" onChange={onInputChange}>3 months</Radio>
                        <Radio value="Permanent" onChange={onInputChange}>Permanent</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>

                <Box mt="5">
                    <FormLabel>Appeal Status</FormLabel>
                    <RadioGroup name="status">
                        <Stack spacing="5px">
                        <Radio value="Appealable" onChange={onInputChange}>Appealable</Radio>
                        <Radio value="Non Appealable" onChange={onInputChange}>Non Appealable</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
            </FormControl>
            <Button mt="5" mb="5" type="submit" colorScheme="green">Submit</Button>
        </form>
    )
}

export default TsuForm
